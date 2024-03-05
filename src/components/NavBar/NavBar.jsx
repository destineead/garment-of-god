import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Nav.css';

import logo from '../../Assets/logo.png'
import cartImg from '../../Assets/cart-icon.svg'

export default function NavBar({ user, setUser, order }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li><Link to="/">HOME </Link></li>
        <li><Link to="/shop">SHOP</Link></li>
      </ul>
      <div className="login-cart">
        {user ? (
          <button><Link to="" onClick={handleLogOut}>Log Out</Link></button>
          ):(
          <button><Link to="/login">Log In</Link></button>
        )}
        {(user && order) && 
          <>
            <Link to='/cart'><img src={cartImg} alt="" id='cart-img' /></Link>
            <div className="nav-cart-count">{order.orderQty}</div>
          </>
        }
      </div>
    </div>
  );
} 