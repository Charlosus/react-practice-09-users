import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './redux/auth/operations';
import { selectUser } from './redux/auth/selectors';

export default function UserNav() {
  const dispatch = useDispatch();
  const { name = 'Guest' } = useSelector(selectUser) || {};
  const handleLoggOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcom, {name}</p>
      <button onClick={handleLoggOut}>Logout</button>
    </div>
  );
}
