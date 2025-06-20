import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from './redux/auth/selectors';
import { useSelector } from 'react-redux';

export function PrivateRoute({ Component, redirectPath }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectPath} />;
}
