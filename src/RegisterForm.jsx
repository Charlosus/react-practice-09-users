import { useDispatch } from 'react-redux';
import { register } from './redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
