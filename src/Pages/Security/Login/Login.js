import React, { useState } from 'react';
import './Login.css'

import img from '../../../image/banner1.jpg'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnchange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
        console.log(newData)
    }

    const handleLogin = e => {
          
       
        alert('hel')
    e.preventDefault()
}

    return (
        <div className='mt-5 pt-5'>
            <h1 className='text-center  logh'>Login</h1>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 mb-5'>
                       
                            
                            <Form  onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' onChange={handleOnchange}  placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' onChange={handleOnchange} placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
  </Form.Group>
  <button type="submit" className='contactBtn'>Login</button>
                            </Form>
                        <div className='text-center my-3 text-success shadow rounded'>-----------or-------------</div>
                         <button className='contactBtn'>Google Signin</button> 
                        
                            
               
            
                        <div className='text-success shadow mt-3 rounded p-1'>
                            <h5>New User? Please <Link to="/register">Register</Link> </h5> OR
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

export default Login;