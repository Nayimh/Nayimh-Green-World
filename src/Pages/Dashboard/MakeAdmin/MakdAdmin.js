import React  from 'react';
import { Form } from 'react-bootstrap';
import icon from '../../../image/admin.png'
const MakdAdmin = () => {
    // const [email, setEmail] = useState('');

    const handleEmail = e => {
    
        console.log(e.target.value);
        e.target.value = " ";
    }

    const handleAdmin = (e) => {
        // const user = { email };
        // fetch('https://serene-gorge-52503.herokuapp.com/users/admin', {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             setSuccess(true);
        //         }
        //     })
        // e.target.reset();
        alert('ok');
        e.preventDefault();
    }

    return (
        <div>
            <div>
            
            <div className='container text-center'>
                <img className='w-25 my-5 py-5' src={icon} alt="" />
                <div>
                <Form onSubmit={handleAdmin}>
  <Form.Group className="mb-3" >
    <Form.Label className='text-bold'>Make Admin</Form.Label>
    <Form.Control type="email" name='email' onBlur={handleEmail} placeholder="Admin email" />
  
  </Form.Group>
  
  
  <button type='submit' className='cardBtn'>Make Admin</button>
                    </Form>
                    {/* {success && <Badge bg="success">Success</Badge>} */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MakdAdmin;