import React from 'react'
import './Component.css'
import { Container } from 'react-bootstrap';


export default function About() {

  return (
    <>
      <div className='about' id='about'>
        <Container  >
          <h1 className='heading'>ABOUT US</h1>
        </Container>
        <div className='about-img-up'>
          <div className='about-img'>
            <div className='about-content'>
              <div>
                <h1>WHO WE ARE ?</h1>
              </div>
              <div>
                <li>Description sadgksadkj asdklnsadgk sd </li>
                <li>Description sadgksadkj asdklnsadgk sd </li>
                <li>Description sadgksadkj asdklnsadgk sd </li>
                <li>Description sadgksadkj asdklnsadgk sd </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
