import React from 'react';
import './ContactUs.css';
import img from '../../../image/banner2.jpg'
import { Form } from 'react-bootstrap';
const Contactus = () => {
    return (
        <div className='my-5 py-5 container about'>
        <h1 className='text-center my-5 contacth'>CONTACT US</h1>
        <div className='row mt-5'>
            <div className='col-lg-7 col-md-7 col-sm-12 mb-5'>
            <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">

</Form.Group>
<button className='contactBtn'>Submit</button>
</Form>
        </div>
            <div className='col-lg-5 col-md-5 col-sm-12 mt-1'>
                <img className='w-100 rounded shadow' src={img} alt="" />
        </div>
        </div>
    </div>
    );
};

export default Contactus;