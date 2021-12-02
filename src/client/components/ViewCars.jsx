import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const ViewCars = () => {
    const [cars, setCars] = useState('');
useEffect(() => {
    fetch('/get-cars', {method:'GET'}).then(response => response.json()).then(data => setCars(data));
});
    return (

        <div>
            <h1>View Cars Page</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    marginLeft: "20px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/">Back to Home Page</Link>
            </nav>
            
            <div>
                {cars}
            </div>
        </div>

    );

}

export default ViewCars;