import React, { Component } from 'react';
import { Link } from "react-router-dom";
const ViewCars =  () => {
const [cars, setCars] = 
 
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
        <Link to="/">View Cars</Link>
      </nav>
</div>
    
    );
  
}

export default ViewCars;