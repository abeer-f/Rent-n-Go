import React, { useState, useEffect } from "react";
import ViewFetchedRows from "./ViewFetchedRows.jsx";
import { Link } from "react-router-dom";

const ViewCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/api/get-cars", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setCars([...data]));
  });

  const displayCars = [];
  cars.map((element) => {
    displayCars.push(<ViewFetchedRows data={element} />);
  }, []);

  return (
    <>
      <div>
        <h1>View Cars Page</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            marginLeft: "20px",
            paddingBottom: "1rem",
            color: "white",
          }}
        >
          <Link to="/">Back to Home Page</Link>
        </nav>
      </div>
      <div>
        <table>
          <tr>
            <td>Vehicle Name</td>
            <td>Vehicle Description</td>
            <td>People Capacity</td>
            <td>Bag Capacity</td>
            <td>Currency Code</td>
            <td>Rate Plan Type</td>
            <td>Daily Price</td>
            <td>Total Price</td>
            <td>Car License No.</td>
            <td>Zip Code</td>
            <td>Street</td>
            <td>City</td>
            <td>Address Line 1</td>
          </tr>
          {displayCars}
        </table>
      </div>
    </>
  );
};

export default ViewCars;
