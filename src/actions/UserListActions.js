import { UserList } from "../action-constants/UserListActionConstant";

const getAllUsers = () => ({
  type: UserList.GET_ALL_USERS,
  // payload: {},
});

export default getAllUsers;
