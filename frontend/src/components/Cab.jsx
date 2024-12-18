import React, { useState } from "react";
import axios from "axios";
import "../styles/cab.css"; // Ensure this is the correct path to your CSS file
import videoBg from "../images/cabbooking.mp4"; // Correct import path
import Navbar from "./Navbar";

const Cab = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cabData, setCabData] = useState([]);
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null); // Track the booking details
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  // Fetch cab details function
  const fetchCabDetails = async () => {
    try {
      setError(""); // Clear previous errors
      setCabData([]); // Reset previous data

      if (!origin || !destination) {
        setError("Please enter both origin and destination.");
        return;
      }

      // API request to fetch cab details based on origin and destination
      const response = await axios.get("http://localhost:3000/api/cabs", {
        params: { origin, destination }, // Send origin and destination as query parameters
      });

      // Update cab data state with the response
      setCabData(response.data);
    } catch (err) {
      setError("No cabs found for the specified locations.");
    }
  };

  // Handle book now action
  const handleBookNow = (cab) => {
    setBookingDetails({
      cab_number: cab.cab_number,
      cab_name: cab.cab_name,
      price_per_person: cab.price,
      passengers: 1, // Default number of passengers
      date: "",
    });
    setShowModal(true); // Open modal
  };

  // Handle changes in booking form
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate total price based on number of passengers
  const calculateTotalPrice = () => {
    return bookingDetails.price_per_person * bookingDetails.passengers;
  };

  // Confirm booking
  const confirmBooking = () => {
    alert(
      `Booking confirmed!\nCab: ${bookingDetails.cab_name}\nDate: ${bookingDetails.date}\nPassengers: ${bookingDetails.passengers}\nTotal Price: ₹${calculateTotalPrice()}`
    );
    setBookingDetails(null); // Reset after confirmation
    setShowModal(false); // Close modal
  };

  return (
    <>
      <Navbar />

      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h1>Cab Booking</h1>

        {/* Search for cabs */}
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <button onClick={fetchCabDetails}>Search Cabs</button>

        {/* Error message */}
        {error && <p className="error">{error}</p>}

        {/* Display cab details */}
        {cabData.length > 0 && (
          <div>
            {cabData.map((cab, index) => (
              <div key={index} className="cab-card">
                <p><strong>Cab Number:</strong> {cab.cab_number}</p>
                <p><strong>Cab Name:</strong> {cab.cab_name}</p>
                <p><strong>From:</strong> {cab.origin}</p>
                <p><strong>To:</strong> {cab.destination}</p>
                <p><strong>Departure Time:</strong> {cab.departure_time}</p>
                <p><strong>Arrival Time:</strong> {cab.arrival_time}</p>
                <p><strong>Cab Type:</strong> {cab.cab_type}</p>
                <p><strong>Price:</strong> ₹{cab.price}</p>
                <button onClick={() => handleBookNow(cab)}>Book Now</button>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Booking */}
        {showModal && bookingDetails && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Book Your Cab</h3>
              <label>Date of Travel:</label>
              <input
                type="date"
                name="date"
                value={bookingDetails.date}
                onChange={handleBookingChange}
              />
              <label>Number of Passengers:</label>
              <input
                type="number"
                name="passengers"
                min="1"
                value={bookingDetails.passengers}
                onChange={(e) =>
                  handleBookingChange({
                    target: { name: "passengers", value: parseInt(e.target.value) || 1 },
                  })
                }
              />
              <p>
                <strong>Total Price:</strong> ₹{calculateTotalPrice()}
              </p>
              <button onClick={confirmBooking}>Confirm Booking</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cab;
