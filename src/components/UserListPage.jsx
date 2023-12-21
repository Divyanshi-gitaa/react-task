import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserList } from "../action-constants/UserListActionConstant";
import getAllUsers from "../actions/UserListActions";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const UserListPage = () => {
  const allUsers = useSelector((state) => state.userList.allUsers);
  const isLoading = useSelector((state) => state.userList.allUsersLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  // console.log(isLoading);
  if(isLoading) return <Loader/>
  return (
    <>
      {/* {isLoading && <Loader />} */}
      {/* {!isLoading && ( */}
        <>
          <h1 className="text-center text-emerald-800 text-3xl underline">
            Users List
          </h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user?.id}>
                  <td>{user?.id}</td>
                  <td className="cursor-pointer hover:underline active:text-violet-700">
                    <Link to={`/user/${user?.id}`}>{user?.name}</Link>
                  </td>
                  <td>{user?.email}</td>
                  <td>{user?.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      {/* )} */}
    </>
  );
};

export default UserListPage;
