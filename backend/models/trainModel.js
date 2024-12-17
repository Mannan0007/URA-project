import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema(
    {
        train_number: { type: String, required: true, unique: true }, // Train number
        train_name: { type: String, required: true },                // Train name
        origin_station: { type: String, required: true },            // Origin station name
        destination_station: { type: String, required: true },       // Destination station name
        departure_time: { type: String, required: true },            // Departure time
        arrival_time: { type: String, required: true },              // Arrival time
        train_type: { type: String, enum: ['Express', 'Superfast Express', 'Local'], required: true }, // Train type
        price: { type: Number, required: true }                      // Price for the train
    },
    { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Create and export the Train model
const Train = mongoose.model('Train', trainSchema);

export default Train;
