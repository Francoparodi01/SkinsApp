import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {GiAk47} from 'react-icons/gi'
import '../App.css'
import CartWidget from './CartWidget';


const Navb = () => {

  return (
    <Navbar className= 'navCont' expand="lg" >
      <Container fluid> 
        <GiAk47 style={{height: '46px', width:'44px', marginRight:'10px', color: 'whitesmoke'}}/>
          <Navbar.Brand className='navText' href="/">Csgo Skins</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='navText' />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', color: 'white' }}
              navbarScroll
            >
            <Nav.Link className='navText' href="/help">Help</Nav.Link>
            <NavDropdown title="Offers" id="navbarScrollingDropdown dropdown-menu-right textDropdown"  >
              <NavDropdown.Item href="#action3">
                $0.01 to $0.99
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                $1 to $5 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                $6 to $15
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                $16 to $25
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                $26 to $50
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                $51 to $100
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                $101 and above
              </NavDropdown.Item>
            </NavDropdown>            
            <Nav.Link className='navText text-light' >
              Best skins prices
            </Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  export default Navb;