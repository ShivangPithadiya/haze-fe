import React from "react";
import { useSelector } from "react-redux";
import DashboardMain from "../components/dashboard/DashboardMain";
import SuperAdminDashboard from "../components/dashboard/SuperAdminDashboard";

const Dashboard = () => {
  const userType = useSelector((state) => state.user.user.userType)
  console.log(userType, "userType");
  return (
    <>
      {userType === 'super-admin' ? <SuperAdminDashboard /> : <DashboardMain />
      }
    </>
  );
};

export default Dashboard;
