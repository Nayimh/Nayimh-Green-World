import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Booking = () => {

    const { user } = useAuth();

    const { id } = useParams();



    const [plants, setPlants] = useState([]);
    const [details, setDetails] = useState({});
    

    useEffect(() => {
        fetch('https://shielded-river-66834.herokuapp.com/bonsai')
            .then(res => res.json())
            .then(dt => setPlants(dt))
    }, []);
    
    useEffect(() => {
        const foundDetails = plants.find(plant => plant._id === id);
        setDetails(foundDetails);
    }, [id, plants])
    
    

    const handleOrderSubmit = (e) => {
        const email = user?.email;
        // const carId = details?.carId;
        const name = details?.name;
        const img = details?.img;
        const desc = details?.desc;
        const price = details.price;
        const ordersInfo = { email, name, desc, img, price };
    
        fetch("https://shielded-river-66834.herokuapp.com/order", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ordersInfo),
        });
        alert("Order has been placed successfully");
        
        e.target.reset();
        e.preventDefault();
      };
    
 

    

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
   
  </Card>
                    </div>
                    
{/* ---------------------------- */}

                    <div className='col-sm-12 col-md-6 col-lg-6 mt-5 pt-5'> 
                   
                        <form onSubmit={handleOrderSubmit}>
            <input
              type="text"
              className="w-100 my-2 p-1"
              name=""
              id=""
              defaultValue={user?.displayName || ""}
            />
            <input
              type="email"
              className="w-100 my-2 p-1"
              name=""
              id=""
              defaultValue={user?.email || ""}
            />
            <input
              type="number"
              className="w-100 my-2 p-1"
              name=""
              id=""
              placeholder="Your Phone Number"
            />

            <textarea
              name=""
              placeholder="Home Address"
              id=""
              className="w-100"
              required
            ></textarea>
            <input
              type="text"
              className="w-100 my-2 p-1"
              name=""
              id=""
              required
              placeholder="City, Country"
            />
            <input
              className="w-100 btn-success border-0 p-2 my-2 rounded-1"
              type="submit"
              value="Purchase"
            />
          </form>
                       
               </div>

                </div>
           </div>
           
        </div>
    );
};

export default Booking;