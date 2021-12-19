import React from 'react';
import Footer from '../../Home/Footer/Footer';
import NavMenu from '../../Home/NavMenu/NavMenu';
import ExplorePlant from '../ExplorePlant/ExplorePlant';

const ExplorePlants = () => {
    return (
        <div>
            <NavMenu/>
            <ExplorePlant />
            <Footer/>
        </div>
    );
};

export default ExplorePlants;