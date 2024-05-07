import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedLoginRoute = () => {
  const user = useSelector((state) => state.user.user);

  if (user == null) {
    return(
      <Outlet />
    )
  }else{
    return(
      <Navigate to={'/dashboard'} />
    )
  }

  // return  user != null ? <Outlet /> : ;
};
export default ProtectedLoginRoute;
