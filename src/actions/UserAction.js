import { User } from "../action-constants/UserActionConstants";

export const getUserDetailsById = ({ id }) => ({
  type: User.GET_USER_DETAILS_BY_ID,
  payload: { id },
});

