import { useUserContext } from "../Context/userContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { user } = useUserContext();
  if (!user.isUserLoggedIn) {
    return <Navigate to="/"></Navigate>;
  }
  return props.children;
};
