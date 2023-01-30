import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Login from './components/login/SignIn/login';
import SignUp from './components/login/SignUp/sign-up';
import { useAppSelector } from './hooks/hooks';
import Dashboard from './routes/dashboard';
import HomePage from './routes/home-page';
import ProtectedRoute from './routes/protected-route';

const App: React.FC = (): JSX.Element => {
  const loggeIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={loggeIn ? <Navigate to="/dashboard" /> : <HomePage />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
};

export default App;