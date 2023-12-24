import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  localStorage.setItem("twitter-token", "token");
  const token = localStorage.getItem("twitter-token");

  if (!token) {
    return (
      <Navigate
        to={"/auth"}
        state={{ prevurl: location.pathname + location.search }}
      />
    );
  }

  if (token) return <>{children}</>;
};

export default ProtectedRoute;
