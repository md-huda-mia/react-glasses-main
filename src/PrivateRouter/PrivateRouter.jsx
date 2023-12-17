import React from "react";
import UseAuth from "../Hooks/UseAuth";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
 
const PrivateRouter = ({ children }) => {
  const { user, loading } = UseAuth();

  if (loading) return <Loading />;

  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRouter;
