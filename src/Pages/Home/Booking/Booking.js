import React, { useEffect, useState } from 'react';
import {  Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const Booking = () => {
    const { id } = useParams();

    const [plants, setPlants] = useState([]);
    const [details, setDetails] = useState({});
    

    useEffect(() => {
        fetch('http://localhost:5000/bonsai')
            .then(res => res.json())
            .then(dt => setPlants(dt)) 
    }, [])
    
    useEffect(() => {
        const foundDetails = plants.find(plant => plant._id === id);
        setDetails(foundDetails);
    }, [id, plants])
    
    
 

    const handleSubmit = e => {
       
        fetch('http://localhost:5000/order', {
            // mode: 'no-cors',
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(details)
        });
        alert('successfully placed')
        e.preventDefault();
    }


    return (
        <div className='pt-5 pt-5'>
            <h1 className='text-center text-success shadow p-2'>Get Your Favorite Tree 
            </h1>
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-12 col-md-5 col-lg-5'>
                        
                    <Card  className='my-5 detailsCard shadow'>
    <Card.Img variant="top" src={details?.img} />
    <Card.Body>
                    <Card.Title className='name text-center'>Name: { details?.name }</Card.Title>
      <Card.Text className='price text-center'>
                       Price: ${ details?.price}
      </Card.Text>
      <Card.Text className='price text-center'>
                       { details?.desc}
      </Card.Text>
      
     
    </Card.Body>
    {/* <Card.Footer className='text-center'>
                   <button className='cardBtn'>Add to cart</button>
      
    </Card.Footer>     */}
  </Card>
                    </div>
                    
{/* ---------------------------- */}

                    <div className='col-sm-12 col-md-6 col-lg-6 mt-5 pt-5'> 
                    <Form onClick={handleSubmit}>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" value={details?.name}  placeholder={details?.name} disabled/>
    
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" name="number" value={details?.price}  placeholder={details?.price} disabled/>
  </Form.Group>

  <button type="submit" className='contactBtn'>ADD TO CART</button>
   
                        </Form>
                       
               </div>

                </div>
           </div>
           
        </div>
    );
};

export default Booking;