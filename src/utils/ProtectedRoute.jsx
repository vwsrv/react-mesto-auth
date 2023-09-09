import React from 'react';
import { Navigate } from "react-router-dom";

export const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-up" replace/>
)}