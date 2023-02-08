// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthUrl } from '../../../services/api.service';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import RightMenuButton from './user-submenu/UserSubmenu';
import './UserPreferences.scss';

const UserPreferences = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(({ user }) => user);
  // TODO: make the connect to twitter button appear only when not connected
  // const [connectionTwitter, setConnectionTwitter] = useState(false);

  const handleClickNavigate = async () => {
    navigate('/dashboard/co-pilot');
  };

  const handleClick = async () => {
    try {
      const res = await getAuthUrl(user.id);
      window.location.href = res.url;
    } catch (error) {
      console.log('error in handleClick in fetAuthUul', error);
    }
  };

  return (
    <>
      <div className="container-user-settings">
        <h1>User Preferences</h1>
        <div className="right-menu-slide-right">
          <RightMenuButton />
        </div>
        <div className="current-user-settings" onClick={handleClickNavigate}>
          <label className="current-preferences-user" htmlFor="user-name">
            Current Preferences
          </label>
          <div className="frequency-tweet-posting">
            <p>Daily posting frequency:</p>
            {user.frequencyTweetPosting}
          </div>
          <div className="selected-hours">
            <p>Posting hours:</p>
            {user.postingHours.map((hour: number) => (
              <p key={hour}>{hour < 10 ? `0${hour}:00 h` : `${hour}:00 h`}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPreferences;
