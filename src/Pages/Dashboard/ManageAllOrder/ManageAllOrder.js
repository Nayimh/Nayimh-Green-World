import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';
// import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrder = () => {
    // const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(dt => setOrders(dt))
    }, []);
    
    const handleOrderDelete = (id) => {
        const proceed = window.confirm(
          "Are you sure?"
        );
        if (proceed) {
          const url = `http://localhost:5000/order/${id}`
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.deletedCount) {
                const remaining = orders?.filter((order) => order?._id !== id);
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
   
      <th> Imgage</th>
      <th> Name</th>
     
      <th>Price</th>
      {/* <th>Email</th> */}
      <th>manage</th>
      <th>Status</th>
    </tr>
  </thead>
            {
              orders.map(order => <tbody key={order?._id}>
              
                <tr>
                  
                            <td><img className='dim shadow-lg rounded' src={order?.img} alt="" /></td>
                            <td>{order?.name}</td>
                  <td>{ order?.price }</td>
                  {/* <td>{ user?.email }</td> */}
                 <td> <button onClick={()=> handleOrderDelete(order?._id)} className='cardBtn'>x</button> </td>
                 <td><button className='cardBtn' disabled>pending</button> <button className='cardBtn' disabled>Accepted</button></td>
                </tr>
                
              </tbody>)
            }
</Table>
                       
                
            </div>
        </div>
    );
};

export default ManageAllOrder;