import { Navigate } from "react-router";

type ProtectedRouteProps = {
  username: string | undefined;
  children: React.ReactNode;
};

const ProtectedRoute = ({ username, children }: ProtectedRouteProps) => {
  if (!username || username === "") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
