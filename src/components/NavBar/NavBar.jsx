import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <header className="Header">
        <Link to='/' className="Logo NavBar-link">SIT</Link>
        <Link to='/timer' className="NavBar-link">TIMER</Link>
        <Link to='' className='NavBar-link' handleLogout={props.handleLogout}
>LOG OUT</Link>
        {/* <Link to='/login' className='NavBar-link'>LOG IN</Link>
        <Link to='' className='NavBar-link'>SIGN UP</Link> */}
      </header>
    </div>
    :
    <div>
      <header className="Header">
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </header>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;