import React from 'react';
import { Outlet } from 'react-router-dom/dist';
import Home from '../../Components/Home/Home';
import Footer from '../../shares/Footer/Footer';
import Navbar from '../../shares/Header/Navbar';
import DataSend from '../../Components/pages/DataSend/DataSend';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DataSend />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;