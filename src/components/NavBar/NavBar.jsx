import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import NavLink from 'react-bootstrap/NavLink';

const NavBar = (props) => {
  let nav = props.user ?
      <>
        {/* <NavLink componentClass={Link} href="/" to="/" active={location.pathname === '/'}>SIT</NavItem>
        <NavItem componentClass={Link} href="/timer" to="/timer" active={location.pathname === '/timer'}>TIMER</NavItem>
        <NavItem componentClass={Link} href="/visualize" to="/visualize" active={location.pathname === '/visualize'}>TIMER</NavItem>
        <NavItem componentClass={Link} href="" to="" active={location.pathname === ''} onClick={props.handleLogout}>LOG OUT</NavItem> */}

        <Nav.Link href='/timer'>T I M E R</Nav.Link>
        <Nav.Link href='/visualize'>V I S U A L I Z E</Nav.Link>
        <Nav.Link href='' className='justify-content-end' onClick={props.handleLogout}>L O G  O U T</Nav.Link>
      </>
    :
  
      <>
        <Nav.Link href='/login' className='NavBar-link'>L O G  I N</Nav.Link>
        <Nav.Link href='/signup' className='NavBar-link'>S I G N  U P</Nav.Link>
      </>

  return (
    <Navbar bg="light" variant="light">
      <Nav> 
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/sit.png"
          width="20"
          height="20"
          className="d-inline-block align-top"
        />&nbsp;&nbsp;
        {'S I T'}
      </Navbar.Brand>
      {nav}
      </Nav>
    </Navbar>
  );
};

export default NavBar;