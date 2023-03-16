import React from 'react';
import Home from '../../Components/Home/Home';
import Footer from '../../shares/Footer/Footer';
import Navbar from '../../shares/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;