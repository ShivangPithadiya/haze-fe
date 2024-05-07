import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);

  if (user) {
    return(
      <Outlet />
    )
  }else{
    return(
      <Navigate to={'/'} />
    )
  }

  // return  user != null ? <Outlet /> : ;
};
export default ProtectedRoute;
