import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import '../AdminPanel/AdminIndex.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav className="flex-column sidebar">
            <Container>
                <div className='admin'>
                    <h1>Hi Admin</h1>
                </div>
                <Nav.Link as={Link} to="/admin/product">Product Listing</Nav.Link>
                <Nav.Link as={Link} to="/admin/product2">Product2 Listing</Nav.Link>
                {/* Add other admin links as needed
              <Nav.Link as={Link} to="/admin/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/admin/settings">Settings</Nav.Link> */}
            </Container>
        </Nav>
    );
};

export default Sidebar;
