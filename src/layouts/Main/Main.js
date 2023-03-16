import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Home from '../../Components/Home/Home';
import Footer from '../../shares/Footer/Footer';
import Navbar from '../../shares/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;