import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrder = () => {
    
    const [orders, setOrders] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://shielded-river-66834.herokuapp.com/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email])
  
  
    const handleOrderDelete = (id) => {
      const proceed = window.confirm(
        "Are you sure?"
      );
      if (proceed) {
        const url = `https://shielded-river-66834.herokuapp.com/order/${id}`;
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
        <div className='container'>
            <Table  variant="success" striped bordered hover size="sm" responsive="sm">
                    <thead>
      
                    <tr>
     
      <th> Image</th> 
      <th> Name</th> 
      <th>Price Name</th>
      <th>Email</th>
    </tr>
      
                    </thead>
                 
        
            {
              orders?.map(order => <tbody key={order?._id}>
                  <td><img className='dim' src={order?.img} alt="" /></td>
                <td>{order?.name}</td>
                <td>{ order?.price }</td>
                  <td><button onClick={()=> handleOrderDelete(order?._id)} className='cardBtn'>Cancel</button></td>
              </tbody>)
            }
            
               
                   
                   </Table>
        </div>
    );
};

export default ManageOrder;