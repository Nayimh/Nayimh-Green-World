import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const ExploreCard = (props) => {

    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });

    const { isLoading } = useAuth();
    const { name, img, desc, price, _id } = props.plant;
    useEffect(()=> {
        Aos.init({
            once: true,
        })
    });
    
    if(isLoading) {return <Spinner animation="border" variant="success"/>}
    return (
        
            <div className = ' col-md-6 col-lg-4 col-xm-12' >
            
            {isLoading ? <Spinner animation = "border" variant = "success"/>
                :
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
</Card>}

    </div>
    );
};

export default ExploreCard;