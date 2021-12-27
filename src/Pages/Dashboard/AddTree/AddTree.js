import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import img from '../../../image/banner1.jpg'

const AddTree = () => {
    const [addTree, setAddtree] = useState({})

    const handleChange = e => {
        const field = e.target.name;
            const value = e.target.value;
            const newData = { ...addTree };
            newData[field] = value;
            setAddtree(newData);
  
      }


    const handleSubmit= (e) => {
      

        fetch('https://serene-gorge-52503.herokuapp.com/bonsai', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(addTree)
        })

        e.target.reset();
        e.preventDefault();
    }



    return (
        <div>
            <h1 className='heading text-center bg-success my-5 py-5'>ADD NEW PLANTS</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 mb-5'>
                        <img className='w-100 rounded shadow' src={ img } alt="" />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter Tree Name" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" name="number" onChange={handleChange} placeholder="Price" required/>
  </Form.Group>
  <Form.Group className="mb-3" >
  <Form.Label>Photo URL</Form.Label>
    <Form.Control type="text" name="img" onChange={handleChange} placeholder="Enter Tree Photo URL" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" onChange={handleChange} name="desc" rows={3} required/>
  </Form.Group>
  <button type="submit" className='contactBtn'>ADD TREE</button>
   
</Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTree;