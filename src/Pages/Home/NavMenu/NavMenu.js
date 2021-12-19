import React from 'react';
import './Navmenu.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const NavMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
                
                <Navbar.Brand ><Link className='green' to="/home">Green World</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className='link' to="/home">Home</Link>
      <Link className='link' to="/explore">Explore Plants</Link>
     
     
     
      
    </Nav>
    <Nav>
      <Nav.Link as={HashLink} className='link' to="/login">Login</Nav.Link>
      <Nav.Link >
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavMenu;