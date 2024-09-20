import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import '../Component/Component.css'
import { Link, } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import img1 from '../images/hhhhh.png';



export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row style={{alignItems:'center'}}>
          <Col lg="5" md='6' sx>
            <div className='fimg'>
              <img src={img1} className='imglog ' alt="logo" />
            </div>
          </Col>
          <Col lg="2" md='2' sx >
            <div className='fnav'>
            <h3>Quick Links</h3>
            
              <Nav.Link href='#home' exact className='navlink' ><span   >Home</span></Nav.Link>
              <Nav.Link href="#about" className='navlink' ><span >About</span></Nav.Link>
              <Nav.Link href="#gellary" className='navlink' ><span  >Gellary</span></Nav.Link>
              <Nav.Link href="#services" className='navlink' ><span >Services</span></Nav.Link>
              <Nav.Link as={Link} to='/404' href='#service' className='navlink'><span >404</span></Nav.Link>
            </div>
          </Col>
          <Col lg="2" md='2' sx  >
            <div className='fnav'>
            <h3>Quick Links</h3>
              <Nav.Link href='#home' exact className='navlink' ><span   >Home</span></Nav.Link>
              <Nav.Link href="#about" className='navlink' ><span >About</span></Nav.Link>
              <Nav.Link href="#gellary" className='navlink' ><span  >Gellary</span></Nav.Link>
              <Nav.Link href="#services" className='navlink' ><span >Services</span></Nav.Link>
              <Nav.Link as={Link} to='/404' href='#service' className='navlink'><span >404</span></Nav.Link>
            </div>
          </Col>
          <Col lg="3" md='2' sx >
          <h3>Contact Links</h3>
            <div className='gmail'>
              <p>
                03181088606<br />
                03181088606<br/>
              </p>
              {/* <h6> syedhassanullah.0900@gmail.com</h6> */}
            </div>
            {/* <div className='icon' >
                <FontAwesomeIcon icon={faFacebook} size="xl" className='icon2' />
                <FontAwesomeIcon icon={faInstagram} size="xl" className='icon2' />
                <FontAwesomeIcon icon={faWhatsapp} size="xl" className='icon2' />
                <FontAwesomeIcon icon={faTiktok} size="xl" className='icon2' />
            </div> */}
          </Col>

        </Row>
      </Container>
    </div>
  )
}
