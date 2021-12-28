import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <div>
                
                <h1>404 NOT PAGE FOUND</h1>
            </div>
            <div>
                <Link to="/home"><button className='cardBtn'>Go Home</button></Link>
                
                </div>
           
 
        </div>
    );
};

export default NotFound;