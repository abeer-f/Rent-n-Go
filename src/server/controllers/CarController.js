const Car = require('../models/CarModel');

const CarController = {

  async createCar(req, res, next) {
    const { description, vehicleExample, peopleCapacity, bagCapacity, airportName,ratePlan, dailyPrice, totalPrice} = req.query;

    res.locals = await Car.create({ description: description, vehicleExample: vehicleExample, peopleCapacity: Number(peopleCapacity), bagCapacity:bagCapacity, airportName: airportName, ratePlan:ratePlan, dailyPrice:dailyPrice, totalPrice:totalPrice});
    return next();
  },

  async getCars(req, res, next) {
    const resultSet = await Car.find({}).lean().exec();
    res.locals.cars = resultSet;
    return next();
  },

};

module.exports = CarController;
