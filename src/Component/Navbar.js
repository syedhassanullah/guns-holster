import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, } from 'react-router-dom';
import './Component.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import imglog from '../images/hhhhh.png'
import Contact from '../OnePageComponent/Contact';


const MainNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" fixed='top' >
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark" className="order-0" style={{ padding: 'px 10px',backgroundColor: 'gray' ,margin:'10px'}} />
                    <Navbar.Brand href="#home" >
                        <img src={imglog} className='imglog' alt="logo" />
                        {/* <h6 style={{color :"white"}}><span>contact</span> 03181888606</h6>
                        <h6 style={{color :"white"}}>03181888606</h6> */}
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="order-1">
                        <Nav className="mx-auto nav2">
                            
                            <Nav.Link href='#home' exact  ><span className='navlink '  >Home</span></Nav.Link>
                            <Nav.Link href="#about"><span className='navlink'>About</span></Nav.Link>
                            <Nav.Link href="#gallery"><span className='navlink' >Gellary</span></Nav.Link>
                            <Nav.Link href="#service"><span className='navlink'>Services</span></Nav.Link>
                            <Nav.Link href="#product"><span className='navlink'>Products</span></Nav.Link>
                            <Nav.Link as={Link} to='/404' href='#404'><span className='navlink'>404</span></Nav.Link>
                        </Nav>
                        <Contact />
                    </Navbar.Collapse>
                </Container>``
            </Navbar>
        </div >
    )
}

export default MainNavbar
