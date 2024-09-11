import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import '../AdminPanel/AdminIndex.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    // const [show , setShow] = useState;
    // const handleshow = () =>{
    //     (!show)
    // }
    return (
        <div className=" sidebar">

            <div>
                <h1>Hi Admin</h1>
            </div>
        <div className='link'>
        
                    <Nav.Link as={Link} to="/admin">Home</Nav.Link>
                    
                        
                    <Nav.Link as={Link} to="/admin/product">Product Listing</Nav.Link>
                    
                
                    <Nav.Link as={Link} to="/admin/product2">Product2 Listing</Nav.Link>
                    
                    {/* Add other admin links as needed
<Nav.Link as={Link} to="/admin/products">Products</Nav.Link>
<Nav.Link as={Link} to="/admin/settings">Settings</Nav.Link> */}
           </div>
            
        </div>
    );
};

export default Sidebar;


