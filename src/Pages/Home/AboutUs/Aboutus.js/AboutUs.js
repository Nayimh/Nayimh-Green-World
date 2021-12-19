import React from 'react';
import './AboutUs.css'
import img from '../../../../image/banner3.jpg'
const AboutUs = () => {
    return (
        <div className='container mx-auto my-5 about'>
            <h1 className='text-center mb-5 abouth'>Our Vision</h1>
            <div >
            <div className='row mt-5'>
                    <div className='col-lg-5 col-md-5 sm-12 mb-5'>
<img className='w-100 rounded' src={img} alt="" />
                    </div>
                    <div className='col-lg-7 col-md-7 sm-12 '>
                        <h5 className=' abouttext text-center mb-3'>
                        ESTABLISHED FOR OVER 50 YEARS
                        </h5>
                        <h3 className='aboutm my-3'>
                        We're a family-run business, serving the Bonsai community with quality trees, unsurpassed customer service and expert Bonsai care and styling advice.
                        </h3>
                        <p className='aboutpera mt-3'>
                        We’re committed to supplying high-quality, affordable Bonsai trees. Whether you’re looking for a specimen tree or an introduction to caring for Bonsai, our team have the knowledge and experience to ensure you get the right tree for your home.
                            </p>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;