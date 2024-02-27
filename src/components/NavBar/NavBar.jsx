import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Nav.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <p><Link to="/">HOME</Link></p>
      <p><Link to="/best-sellers">SHOP</Link></p>
      <p><Link to="/profile">PROFILE</Link></p>
      <p><Link to="/cart">CART</Link></p>
     <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}