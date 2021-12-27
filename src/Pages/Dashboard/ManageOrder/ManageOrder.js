import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrder = (props) => {
    const { name, price, _id } = props.order;
    const [orders, setOrders] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch('https://serene-gorge-52503.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
  
  
    const handleOrderDelete = (id) => {
      const proceed = window.confirm(
        "Are you sure?"
      );
      if (proceed) {
        const url = `https://serene-gorge-52503.herokuapp.com/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = orders.filter((order) => order._id !== id);
              setOrders(remaining);
            }
          });
      }
    };


    return (
        <div>
            <Table className='w-75 mx-auto' striped bordered hover size="sm" responsive="sm">
                    <thead>
      
                    <tr>
     
      <th> Name</th>
      <th>Price Name</th>
      <th>Email</th>
    </tr>
      
                    </thead>
                 
                    <tbody>
             <tr>
                                
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{user?.email}</td>
                                <td><button onClick={()=> handleOrderDelete(_id)} className='cardBtn'>X</button></td>
                </tr>
                </tbody>
                   
                   </Table>
        </div>
    );
};

export default ManageOrder;