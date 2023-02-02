import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUserById } from '../services/api.service';
import { activeUser } from '../store/slices/user.slice';
import './App.scss';
import Header from './components/header/Header';
import Login from './components/login/SignIn/login';
import SignUp from './components/login/SignUp/sign-up';
import NavBarUser from './components/navbar/loginnavbar/LoginNavBar';
import CoPilot from './routes/co-pilot';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Dashboard from './routes/dashboard';
import HomePage from './routes/home-page';
import ProtectedRoute from './routes/protected-route';
import TopicsDefinition from './routes/topics-definition';
import UserPreferences from './routes/user-preferences';
import IUser from './interfaces/user.interface';

const App: React.FC = (): JSX.Element => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('isLoggedIn in App', isLoggedIn);

    if (!isLoggedIn) {
      (async () => {
        let storedString = localStorage.getItem('user');
        if (storedString) {
          const storedUser: IUser = JSON.parse(storedString);
          console.log('storedUser', storedUser);

          if (storedUser) {
            const user: IUser = await getUserById(storedUser.id);
            console.log(user);

            dispatch(activeUser(user));
          }
        }
      })();
    }
  }, []);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path="topics-definition"
              element={
                <ProtectedRoute>
                  <TopicsDefinition />
                </ProtectedRoute>
              }
            />
            <Route
              path="co-pilot"
              element={
                <ProtectedRoute>
                  <CoPilot />
                </ProtectedRoute>
              }
            />
            <Route
              path="growth"
              element={
                <ProtectedRoute>
                  <h1>Growth</h1>
                </ProtectedRoute>
              }
            />
            <Route
              path="user/preferences"
              element={
                <ProtectedRoute>
                  <UserPreferences />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
