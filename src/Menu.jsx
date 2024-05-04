import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div><Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link> */}
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}


export default Menu