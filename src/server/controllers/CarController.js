const Car = require('../models/CarModel');

const CarController = {

  async createCar(req, res, next) {
    const { description, vehicleExample, peopleCapacity, bagCapacity, currencyCode, ratePlan, dailyPrice, totalPrice, addressLine1,street,city, zipCode, carLicense } = req.query;

    res.locals = await Car.create({ description: description, vehicleExample: vehicleExample, peopleCapacity: Number(peopleCapacity), bagCapacity:bagCapacity, currencyCode: currencyCode, ratePlan:ratePlan, dailyPrice:dailyPrice, totalPrice:totalPrice,addressLine1:addressLine1, street:street, city:city,  zipCode:zipCode, carLicense: carLicense });
    return next();
  },



};

module.exports = CarController;
