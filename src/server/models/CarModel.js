const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://abeer-f:abc@starwars.qfda0.mongodb.net/starwars?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'starwars'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const carSchema = new Schema({
  description: { type: String, required: true },
  vehicleExample: { type: String, required: true },
  peopleCapacity: { type: Number, required: true },
  bagCapacity: { type: Number, required: true },
  currencyCode: { type: String, required: true },
  ratePlan: { type: String, required: true },
  dailyPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  addressLine1: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  carLicense: { type: Number, required: true },
});
const Car = mongoose.model('car', carSchema);
module.exports = Car;

