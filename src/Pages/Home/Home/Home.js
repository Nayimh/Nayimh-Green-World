import React from 'react';
import AboutUs from '../AboutUs/Aboutus.js/AboutUs';

import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import HomeTrees from '../HomeTree/HomeTrees/HomeTrees';
import NavMenu from '../NavMenu/NavMenu';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavMenu />
            <Banner />
            <HomeTrees />
            <AboutUs />
            <Contactus />
          
            <Footer/>
        </div>
    );
};

export default Home;