import React from 'react';
import { useLocation } from 'react-router-dom';

const DataReceived = (props) => {
    const location = useLocation();
    const { state, pathname } = location;

    console.log("details page data state:", state, "pathname:", pathname, "loaction:", location);

    console.log("line 10::", props)

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default DataReceived;
