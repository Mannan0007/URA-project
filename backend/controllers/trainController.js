import trains from '../data/train.js';  // Import the JS file with train data

// Controller to fetch train details based on origin and destination stations
export const getTrainDetails = async (req, res) => {
    const { origin_station, destination_station } = req.query; // Expect origin and destination from query parameters

    // Check if both origin and destination are provided
    if (!origin_station || !destination_station) {
        return res.status(400).json({ message: 'Origin and destination stations are required' });
    }

    // Filter trains matching both origin and destination stations
    const matchingTrains = trains.trains.filter((train) => 
        train.origin_station.toLowerCase() === origin_station.toLowerCase() &&
        train.destination_station.toLowerCase() === destination_station.toLowerCase()
    );

    // If no matching trains are found, return a 404 error
    if (matchingTrains.length === 0) {
        return res.status(404).json({ message: 'No trains found for the specified stations' });
    }

    // Return the matching train details
    res.status(200).json(matchingTrains);
};
