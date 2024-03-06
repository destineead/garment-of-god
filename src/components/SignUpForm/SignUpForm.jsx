import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({setUser}) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(userData);
      setUser(user);
      navigate('/shop');
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      setError('Sign Up Failed - Try Again');
    }
  }

  const disable = userData.password !== userData.confirm;
  return (
    <div className="flex-ctr-ctr">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={userData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}