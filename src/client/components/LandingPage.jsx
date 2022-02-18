import React, { useEffect, useState } from 'react';
import Row from './Row.jsx';
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [data, setData] = useState('');
  const [fetchLocation, setFetchLocation] = useState();
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search?location_return=1365100023&date_time_pickup=2022-05-11%2011%3A00%3A00&date_time_return=2022-05-12%2011%3A00%3A00&location_pickup=${fetchLocation}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        'x-rapidapi-key': 'a0cd7f0d33msh28094d8c8fbd24bp1633adjsn2310399601b2',
      },
    }).then((response) => response.json()).then((data) => setData(data['vehicleRates']))
      .catch((err) => {
        console.error(err);
      });
  }, [fetchLocation]);

  const handleSubmit = (currentData, currentLocation) => {
    fetch(`/api/add?description=${currentData.vehicleInfo.description}&vehicleExample=${currentData.vehicleInfo.vehicleExample}&peopleCapacity=${currentData.vehicleInfo.peopleCapacity}&bagCapacity=${currentData.vehicleInfo.bagCapacity}&airportName=${currentLocation.airportName}&ratePlan=${currentData.ratePlan}&dailyPrice=${currentData.rates.USD.basePrices.DAILY}&totalPrice=${currentData.rates.USD.totalAllInclusivePrice}`, {
      method: 'POST',
      headers: {
        'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
        'x-rapidapi-key': 'a0cd7f0d33msh28094d8c8fbd24bp1633adjsn2310399601b2',
      },
    }).then((response) => response.json()).then((data) => console.log(data))
      .catch((err) => {
        console.error(err);
      });

  }

  const handleFetchLocation = () => {
    fetch(`https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations?name=New%20York`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "priceline-com-provider.p.rapidapi.com",
        "x-rapidapi-key": "a0cd7f0d33msh28094d8c8fbd24bp1633adjsn2310399601b2"
      }
    })
      .then(response => response.json()).then(data => setLocation([...data]))
      .catch(err => {
        console.error(err);
      });
  }

  const handlefetchLocationSelect = (e) => {
    setFetchLocation(e.target.value);
  }

  const displayCars = [];
  for (let key in data) {
    let airportCode = data[key]['partnerInfo']['pickupLocationId'].split('-');
    displayCars.push(<Row handleSubmit={handleSubmit} data={data[key]} location={location.filter((element) => airportCode[1] === element.id)} />);
  }

  return (
    <div>
      <h1>Car Rental Platform</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/view">View Cars</Link>
      </nav>
      <label for="location">Select a Location:</label>
      <select name="location" id="cars" onChange={(e) => handlefetchLocationSelect(e)}>
        <option value="JFK">-Select-</option>
        <option value="JFK">JFK</option>
        <option value="LGA">LGA</option>

      </select>
      <button onClick={() => handleFetchLocation()}>Fetch Airport Location</button>
      <table>
        <tr>
          <td>Vehical Type</td>
          <td>Vehical Type</td>
          <td>Vehicle Description</td>
          <td>People Capacity</td>
          <td>Bag Capacity</td>
          <td>Airport Name</td>
          <td>Rate Plan Type</td>
          <td>Daily Price</td>
          <td>Total Price</td>
        </tr>
        {displayCars}
      </table>
    </div>
  );

}
export default LandingPage;