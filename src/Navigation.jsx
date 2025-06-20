import { Link } from 'react-router-dom';
import UserNav from './UserNav';
import { AuthNav } from './AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/tasks">Tasks</Link>}
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </nav>
  );
};
