import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
// import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://serene-gorge-52503.herokuapp.com/order')
            .then(res => res.json())
            .then(dt => setOrders(dt))
    }, []);
    
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
        <div className='container'>
            <h1 className='mt-2 mb-5 p-5 text-center bg-success text-white shadow rounded'>Manage your Orders</h1>
            <div>
                
            <Table striped bordered hover responsive="sm" variant="success">
  <thead>
    <tr>
   
      <th> Name</th>
     
      <th>Price</th>
      <th>Email</th>
      <th>manage</th>
      <th>Status</th>
    </tr>
  </thead>
            {
              orders.map(order => <tbody key={order?._id}>
              
                <tr>
                  
                            <td>{order?.name}</td>
                  <td>{ order?.price }</td>
                  <td>{ user?.email }</td>
                 <td> <button onClick={()=> handleOrderDelete()} className='cardBtn'>x</button> </td>
                 <td><button className='cardBtn'>pending</button> <button className='cardBtn'>Accepted</button></td>
                </tr>
                
              </tbody>)
            }
</Table>
                       
                
            </div>
        </div>
    );
};

export default ManageAllOrder;