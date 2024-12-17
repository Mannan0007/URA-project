import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema(
  {
    flight_number: { type: String, required: true, unique: true }, // Flight number
    flight_name: { type: String, required: true },                // Flight name
    origin: { type: String, required: true },                      // Origin airport
    destination: { type: String, required: true },                 // Destination airport
    departure_time: { type: String, required: true },              // Departure time
    arrival_time: { type: String, required: true },                // Arrival time
    flight_type: { type: String, enum: ['Domestic', 'International'], required: true }, // Flight type
    price: { type: Number, required: true }                         // Price of the flight
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the Flight model
const Flight = mongoose.model('Flight', flightSchema);

export default Flight;
