import React from 'react';
import './Navmenu.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const NavMenu = () => {

  const { user, logout } = useAuth();


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
                
                <Navbar.Brand ><Link className='green' to="/home">Green World</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className='link' to="/home">Home</Link>
      <Link className='link' to="/explore">Explore Plants</Link>
      <Link className='link' to="/dashboard">Dashboard</Link>
     
     
     
      
    </Nav>
    <Nav>
              
      <Nav.Link >
                {user?.email  &&
                  <Button variant="outline-success" className='mx-3'> { user?.displayName || user?.email}</Button>  
                }
                
                {user?.email ?
                
                <Button variant="outline-success" onClick={logout}>Logout</Button>
                :
      <Nav.Link as={HashLink}  to="/login"><Button variant="outline-success">LogIn</Button></Nav.Link> }
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default NavMenu;