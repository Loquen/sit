import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = //props.user ?
    <div>
      <header className="Header">
        <Link to='/' className="Logo NavBar-link">SIT</Link>
        <Link to='/timer' className="NavBar-link">TIMER</Link>
        <Link to='' className='NavBar-link'>LOG OUT</Link>
      </header>
    </div>
    // :
    // <div>
    //   <Link to='/login' className='NavBar-link'>LOG IN</Link>
    //   &nbsp;&nbsp;|&nbsp;&nbsp;
    //   <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    // </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;