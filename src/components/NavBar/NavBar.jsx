import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top py-3">
            <Container>
                <Link to={''} className=' fs-2'>
                    <i className="fa-solid fa-cart-shopping text-main me-2"></i>E-commerce
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='py-3'>
                    <Nav className="ms-auto">
                        <Link to={'/'} className='me-4 '>Home</Link>
                        <Link to={'category'} className='me-3 '>Category</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


