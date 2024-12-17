import cabs from '../data/cab.js';  // Import the JS file with cab data

export const getCabDetails = async (req, res) => {
    const { origin, destination } = req.query; // Expect origin and destination from query parameters

    // Check if both origin and destination are provided
    if (!origin || !destination) {
        return res.status(400).json({ message: 'Origin and destination locations are required' });
    }

    // Filter cabs matching both origin and destination
    const matchingCabs = cabs.cabs.filter((cab) => 
        cab.origin.toLowerCase() === origin.toLowerCase() &&
        cab.destination.toLowerCase() === destination.toLowerCase()
    );

    // If no matching cabs are found, return a 404 error
    if (matchingCabs.length === 0) {
        return res.status(404).json({ message: 'No cabs found for the specified locations' });
    }

    // Return the matching cab details
    res.status(200).json(matchingCabs);
};
