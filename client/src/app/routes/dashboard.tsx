import { useAppSelector } from '../hooks/hooks';
import { NavLink } from 'react-router-dom';
import Button from '../components/button/Button';
import NavBarUser from '../components/navbar/loginnavbar/LoginNavBar';
import React from 'react';
import { getAuthUrl } from '../../services/api.service';

const Dashboard = () => {
  const user = useAppSelector((state) => state.user);
  console.log('user id us :', user);

  const handleClick = async () => {
    const res = await getAuthUrl(user.id);
    window.location.href = res.url;
  };

  return (
    <div>
      {/* <h1>Dashboard</h1> */}
      <NavBarUser />
      <>{/* <h1>Body dashBoard</h1> */}</>
      <h1>Dashboard</h1>
      <NavLink to="/dashboard/co-pilot">
        <Button text={'co-pilot'} type={'btn-inverted'} />
      </NavLink>
      <img src="/Twitter-logo-png.png" alt='twitter-logo' width='50px'></img>
      <button onClick={handleClick}>authorize with twitter</button>
    </div>
  );
};

export default Dashboard;
