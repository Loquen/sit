import React from 'react';
import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  let nav = props.user ?
      <>
        <Nav.Link href='/timer' className='NavBar-link'>T I M E R</Nav.Link>
        <Nav.Link href='/visualize' className='NavBar-link'>V I S U A L I Z E</Nav.Link>
        <Nav.Link href='' className='NavBar-link justify-content-end' onClick={props.handleLogout}>L O G  O U T</Nav.Link>
      </>
    :
      <>
        <Nav.Link href='/login' className='NavBar-link'>L O G  I N</Nav.Link>
        <Nav.Link href='/signup' className='NavBar-link'>S I G N  U P</Nav.Link>
      </>

  return (
    <Navbar className='nav' bg='light' variant='light'>
      <Nav activeKey={props.location.pathname} > 
      <Navbar.Brand href='/' className='NavBar-link'>
        <img
          alt='Sit Logo'
          src='/sit.png'
          width='20'
          height='20'
          className='d-inline-block align-center'
        />&nbsp;&nbsp;
        {'S I T'}
      </Navbar.Brand>
      {nav}
      </Nav>
    </Navbar>
  );
};

export default NavBar;