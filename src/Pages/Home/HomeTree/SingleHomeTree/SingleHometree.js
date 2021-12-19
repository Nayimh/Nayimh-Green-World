import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleTree.css'

import 'aos/dist/aos.css';
import Aos from 'aos';

const SingleHometree = (props) => {

    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });

    const {  name, img, desc, price, _id} = props.plant;

    return (
        
           <div  className=' col-md-6 col-lg-4 col-sm-12'>
            
            <Card data-aos='fade-up' data-aos-duration='1000' className='my-5 h shadow'>
    <Card.Img variant="top" src={img} className='imag'/>
    <Card.Body>
                    <Card.Title className='name text-center'>Name: { name }</Card.Title>
      <Card.Text className='price text-center'>
                       Price: ${ price}
      </Card.Text>
      
      <Card.Text className='desc'>
                        { desc}
      </Card.Text>
    </Card.Body>
                <Card.Footer className='text-center'>
                    <Link to={`/booking/${_id}`}><button className='cardBtn'>Details</button></Link>
      
    </Card.Footer>
  </Card>
  
        </div>
       
    );
};

export default SingleHometree;