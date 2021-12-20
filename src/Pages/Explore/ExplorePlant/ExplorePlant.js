import React, { useEffect, useState } from 'react';

import useAuth from '../../../hooks/useAuth';
import ExploreCard from '../Explore/ExploreCard/ExploreCard';

const ExplorePlant = () => {
    const [plants, setPlants] = useState([]);
   
    useEffect(() => {
        fetch('https://serene-gorge-52503.herokuapp.com/bonsai')
            .then(res => res.json())
            .then(data => setPlants(data))
    }, [])
  
    return (
        <div className='my-5'>
        <div className='plantText'>
        <h1 className='heading text-center'>OUR PLANTS</h1>
            <p className='paragraph'>Bonsai meanings are very important when gifting your tree to someone. In general, our bonsai symbolise harmony, peace, an order of thoughts, balance and all that is good in nature. Therefore, these beautiful and artistic trees wonderful gifts for friends and family.</p>
            </div>
            <div className='container pt-2 pb-5'>
               
            <div className='row  justify-content-center mx-auto'>
                    { 
                        
                    plants.map(plant => <ExploreCard
                        key={plant._id}
                        plant={plant}
                    ></ExploreCard>)
                    }
            </div>

        </div>
    </div>
    );
};

export default ExplorePlant;