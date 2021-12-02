import React, { useEffect } from 'react';


const Row = (props) => {

  let { data,handleSubmit, location = "" } = props;

  return (
    <tr className="carCard">
      <td><img className="imageClass" src={data.vehicleInfo.images.SIZE67X36} alt="" /></td>
      <td>{data.vehicleInfo.description}</td>
      <td>{data.vehicleInfo.vehicleExample}</td>
      <td>{data.vehicleInfo.peopleCapacity}</td>
      <td>{data.vehicleInfo.bagCapacity}</td>
      <td>{location[0]?.airportName}</td>
      <td>{data.ratePlan}</td>
      <td>{data.rates.USD.basePrices.DAILY}</td>
      <td>{data.rates.USD.totalAllInclusivePrice}</td>
      <button type="button" 
      onClick={() => {handleSubmit(data, location = "")}}> Rent Car</button>
    </tr>
  );
};
export default Row;
