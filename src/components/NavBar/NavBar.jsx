import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Nav.css';
import logo from '../../images/logo.png'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <p>HOME</p>
      <p>SHOP</p>
      <p>PROFILE</p>
      <p>CART</p>
     <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}