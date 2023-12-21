import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserDetailsById } from "../actions/UserAction";
import Loader from "./Loader";

const UserDetail = () => {
  const user = useSelector((state) => state.user.userDetails);
  const isLoading = useSelector((state) => state.user.userDetailsLoading);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetailsById({ id: +id }));
  }, [dispatch, id]);
  if (isLoading) return <Loader />;
  if (Object.keys(user).length > 0)
    return (
      <>
        <Link to="/" className="m-7 p-5 hover:underline active:text-green-500">
          Back to home
        </Link>
        <h1 className="text-3xl text-center mb-10">{user?.name}'s Details</h1>
        <div className="m-7">
          <p>Email: {user?.email}</p>
          <p>
            Address: {user?.address?.city}, {user?.address?.street}{" "}
          </p>
          <p>Zipcode: {user?.address?.zipcode} </p>
          <p>Phone Number: {user?.phone}</p>
          <p>Company Website: {user?.website}</p>
          <p>Company Name: {user?.company?.name}</p>
        </div>
      </>
    );
};

export default UserDetail;
