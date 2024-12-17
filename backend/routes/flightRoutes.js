import express from 'express';
import { getFlightDetails } from '../controllers/flightController.js';

const router = express.Router();

// Route to fetch flight details by flight number
router.get('/', getFlightDetails);

export default router;