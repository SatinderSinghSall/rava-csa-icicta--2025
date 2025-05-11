import { Navigate } from "react-router-dom";

//! ProtectedRoute component that checks if user is logged in:
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if there's a token

  //! If no token, redirect to login:
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  //! If token exists, allow access to the children: (the Dashboard page)
  return children;
};

export default ProtectedRoute;
