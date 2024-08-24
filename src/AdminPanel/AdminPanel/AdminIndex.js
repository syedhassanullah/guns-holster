import React, { useState } from 'react';
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import Sidebar from '../AdminComponent/Sidebar';
import './AdminIndex.css';
import { Outlet } from 'react-router-dom';

const AdminIndex = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col xs={12} md={3} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="content-col">
          <Button
            variant="light"
            className="d-md-none mb-3"
            onClick={handleSidebarToggle}
          >
            ☰
          </Button>
          {/* <MainContent /> */}
          <Outlet /> 
          {/* <h1>admin</h1> */}
          <Offcanvas show={showSidebar} onHide={handleSidebarToggle} data-bs-theme="dark" placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Admin Panel</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar />
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminIndex;
