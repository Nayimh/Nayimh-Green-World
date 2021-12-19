import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../image/banner3.jpg'
const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleChange = e => {
        const field = e.target.name;
            const value = e.target.value;
            const newData = { ...loginData };
            newData[field] = value;
            setLoginData(newData);
          
    
    
      }
    
    
      const handleSubmit = e => {
        if (loginData.password !== loginData.password2) {
          alert('your password did not matched');
          return;
        }
       
        e.preventDefault();
      }

    return (
        <div className='mt-5 pt-5'>
            <h1 className='text-center  logh'>Register</h1>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 mb-5'>
              
             
                <Form onSubmit={handleSubmit}>
                 

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='text' onChange={handleChange} placeholder="Enter Name" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" name='email' onChange={handleChange} placeholder="Enter Email" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' onChange={handleChange} placeholder="Enter Password" required/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" name='password2' onChange={handleChange} placeholder="Retype Password" required/>
    
  </Form.Group>
  
  <button type='submit' className='contactBtn'>Register</button>
                </Form>
             
            
                        <div className='text-success shadow mt-3 rounded p-1'>
                <h5>Already Registered? Please <Link to="/login">Login</Link> </h5>
                OR
                            <Link to="/"><h5>Go Home</h5></Link>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <img className='w-100 rounded shadow' src={ img } alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;