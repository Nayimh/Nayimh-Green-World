import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllProducts.css'
const ManageAllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bonsai')
            .then(res => res.json())
            .then(data => setProducts(data))
    })


    const handleDelete = id => {
        const proceed = window.confirm("are you want to delete this Tree?");
        if (proceed) {
            const url = `http://localhost:5000/bonsai/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product?._id === id)
                        setProducts(remaining);
                    }
                })
        }
    }


    return (
        <div className='container'>
        <h1 className='mt-2 mb-5 p-5 text-center bg-success text-white shadow rounded'>Manage All Products</h1>
        <div>
            
        <Table striped bordered hover responsive="sm" variant="success">
<thead>
<tr>

  <th>Img</th>
  <th> Name</th>
 
  <th>Price</th>
  {/* <th>Email</th> */}
  <th>Status</th>
</tr>
</thead>
        {
          products.map(product => <tbody key={product?._id}>
          
            <tr>
              
             <td>  <img className='dim rounded shadow-lg' src={product.img} alt="" /> </td>
                        <td>{product?.name}</td>
              <td>{ product?.price }</td>
              {/* <td>{ user?.email }</td> */}
             <td><button onClick={()=> handleDelete(product?._id)} className='cardBtn shadow-lg mb-2'>Delete</button> <button className='cardBtn shadow-lg'>Update</button></td>
            </tr>
            
          </tbody>)
        }
</Table>
                   
            
        </div>
    </div>
    );
};

export default ManageAllProducts;