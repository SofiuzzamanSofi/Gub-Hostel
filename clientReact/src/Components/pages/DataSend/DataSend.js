import React from 'react';
import { Link } from 'react-router-dom';

const DataSend = () => {
    const data = { id: 1, name: 'John' };

    return (
        <div>state
            <Link
                to={{
                    pathname: `/data/${5}`,
                }}
                state={{ data }}
            >
                <button className="btn btn-primary">
                    Details
                </button>
            </Link>
        </div>
    );
};

export default DataSend;
