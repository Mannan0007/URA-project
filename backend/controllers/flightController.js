import flights from '../data/flights.js';  // Ensure this path is correct
export const getFlightDetails = async (req, res) => {
    const { origin, destination } = req.query; // Get origin and destination from query parameters

    // Log the received values
    console.log('Received request for:', { origin, destination });

    // Check if both origin and destination are provided
    if (!origin || !destination) {
        return res.status(400).json({ message: 'Origin and destination are required' });
    }

    // Ensure that flights is an array before using .filter
    if (!Array.isArray(flights)) {
        return res.status(500).json({ message: 'Flight data is not an array' });
    }

    // Log the flight data for debugging
    console.log("Flight Data:", flights);

    // Filter flights matching both origin and destination
    const matchingFlights = flights.filter((flight) =>
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase()
    );

    // If no matching flights are found, return a 404 error
    if (matchingFlights.length === 0) {
        return res.status(404).json({ message: 'No flights found for the specified route' });
    }

    // Return the matching flight details
    res.status(200).json(matchingFlights);
};
