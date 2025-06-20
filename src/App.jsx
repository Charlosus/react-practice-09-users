import { useState } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
import RestrictedRoute from './RestrictedRoute';
import { PrivateRoute } from './PrivetRoute';

const HomePage = lazy(() => import('./pages/Home'));
const LoginPage = lazy(() => import('./pages/Login'));
const TaskPage = lazy(() => import('./pages/Task'));
const RegisterPage = lazy(() => import('./pages/Register'));
function App() {
  // const [count, setCount] = useState(0);

  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="tasks"
          element={
            <PrivateRoute redirectPath="/login" Component={<TaskPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectPath="/tasks" Component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectPath="/tasks"
              Component={<RegisterPage />}
            />
          }
        />
      </Routes>
    </SharedLayout>
  );
}

export default App;
