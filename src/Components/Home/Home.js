import React from 'react';
import toast from 'react-hot-toast';

const Home = () => {
    const toast = () => {
        const sum = 1;
        const car = 1;
        const vat = sum + car
        if (vat === 2) {

        }
        console.log(vat)
    }
    return (
        <div>
            <h1 className='text-6xl'>this is home</h1>
            <button onClick={toast}>click me</button>

        </div>
    );
};

export default Home;