import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Login from "../components/Login";
import Signup from "../components/Signup";
import sv1 from "../assets/Image/hazelogo.svg";
import LoginSuperAdmin from '../components/LoginSuperAdmin';



const SuperAdminAuthenticate = () => {
  const [active, setActive] = useState('login');
  const handleChange = (type) => {
    setActive(type === 'signup' ? 'signup' : 'login');
  };

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      window.location.replace('/dashboard');
    }
  }, [user]);

  return (
    <div className='authenticate border d-flex flex-column'>
      <div className='mb-4'>
        <span>
          <img src={sv1} alt='logo' />
        </span>
      </div>
      {active === 'login' ? <LoginSuperAdmin handleChange={handleChange} /> : <Signup handleChange={handleChange} />}
    </div>
  );
};

export default SuperAdminAuthenticate;

