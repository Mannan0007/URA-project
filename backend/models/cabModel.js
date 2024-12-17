import mongoose from 'mongoose';

const cabSchema = new mongoose.Schema({
    cab_number: { type: String, required: true },
    cab_name: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    departure_time: { type: Date, required: true },
    arrival_time: { type: Date, required: true },
    cab_type: { type: String, enum: ['Local', 'International'], required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

const Cab = mongoose.model('Cab', cabSchema);

export default Cab;
