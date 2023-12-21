import { all, put, call, takeLatest } from "redux-saga/effects";
import { UserList } from "../action-constants/UserListActionConstant";

/**
 * User List Saga
 */
function* getAllUsers() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = yield response.json();
    // console.log(users)
    yield put({
      type: UserList.GET_ALL_USERS_SUCCESS,
      payload: {allUsers: users},
    });
  } catch (error) {
    yield put({
      type: UserList.GET_ALL_USERS_FAILURE,
      payload: { error },
    });

    // Handle Error
    yield errorHandler({ error });
  }
}

export default function* root() {
  yield all([takeLatest(UserList.GET_ALL_USERS, getAllUsers)]);
}
