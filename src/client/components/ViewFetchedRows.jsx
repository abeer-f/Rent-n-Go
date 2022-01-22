import React from "react";

const ViewFetchedRows = (props) => {
  const { data } = props;
  return (
    <tr className="carCard">
      <td>{data.description}</td>
      <td>{data.vehicleExample}</td>
      <td>{data.peopleCapacity}</td>
      <td>{data.bagCapacity}</td>
      <td>{data.currencyCode}</td>
      <td>{data.ratePlan}</td>
      <td>{data.dailyPrice}</td>
      <td>{data.totalPrice}</td>
      <td>{data.carLicense}</td>
      <td>{data.zipCode}</td>
      <td>{data.street}</td>
      <td>{data.city}</td>
      <td>{data.addressLine1}</td>
    </tr>
  );
};
export default ViewFetchedRows;
