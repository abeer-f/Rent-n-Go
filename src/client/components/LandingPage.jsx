import React, { Component, useEffect, useState } from 'react';
import Row  from './Row.jsx';
import { Link } from "react-router-dom";

const LandingPage = () => {
const [data, setData] = useState('');
// useEffect(() => {
//     fetch('https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search?location_return=1365100023&date_time_pickup=2022-05-11%2011%3A00%3A00&date_time_return=2022-05-12%2011%3A00%3A00&location_pickup=JFK', {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
//           'x-rapidapi-key': 'a0cd7f0d33msh28094d8c8fbd24bp1633adjsn2310399601b2',
//         },
//       }).then((response) => response.json()).then((data) => setData(data['vehicleRates']))
//         .catch((err) => {
//           console.error(err);
//         });
// },[])

const handleSubmit = () => {
    fetch('/add', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'priceline-com-provider.p.rapidapi.com',
          'x-rapidapi-key': 'a0cd7f0d33msh28094d8c8fbd24bp1633adjsn2310399601b2',
        },
      }).then((response) => response.json()).then((data) => setData(data['vehicleRates']))
        .catch((err) => {
          console.error(err);
        });
    console.log("handleSubmit");

    
}
const displayCars = [];
for(let key in data){
displayCars.push(<Row handleSubmit={handleSubmit} data={data[key]} />);
}
    return(
        <div>
            <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/view">View Cars</Link>
      </nav>
    <table>
        <th>
            <td>Vehical Type</td>
            <td>Vehicle Description</td>
            <td>People Capacity</td>
            <td>Bag Capacity</td>
            <td>Currency Code</td>
            <td>Rate Plan Type</td>
            <td>Daily Price</td>
            <td>Total Price</td>
            </th>
            {/* <input type ="text" value = {val} onChange={(e) => setVal(e.target.value)}/>
       <button type="button" onClick={(val) => handleSubmit(val)}> Rent Car</button> */}
       {displayCars}
       </table>
         </div>
    );
  
}
export default LandingPage;
// class Row extends Component {
// constructor(){
//     super();
//     this.handleAddCar=this.handleAddCar.bind(this);
// }
//     handleAddCar() {
//         console.log('Fetch call made');
//       }

//     render(){
//         const { data } = this.props;
//         return (
//             <div className="carCard">
//               <div><img className="imageClass" src={data.vehicleInfo.images.SIZE67X36} alt="" /></div>
//               <div>{data.vehicleInfo.description}</div>
//               <div>{data.vehicleInfo.vehicleExample}</div>
//               <div>{data.vehicleInfo.peopleCapacity}</div>
//               <div>{data.vehicleInfo.bagCapacity}</div>
//               <div>{data.rates.USD.currencyCode}</div>
//               <div>{data.ratePlan}</div>
//               <div>{data.rates.USD.basePrices.DAILY}</div>
//               <div>{data.rates.USD.totalAllInclusivePrice}</div>
            
  
//              </div>
           
//           );
//     }

//   };



