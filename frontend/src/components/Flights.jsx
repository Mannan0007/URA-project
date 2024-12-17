import React, { useState } from "react";
import axios from "axios";
import "../styles/flights.css"; // Import your CSS
import Navbar from "./Navbar";
import Footer from "./Footer";
import videoBg from "../images/flightbooking.mp4"; // Replace with correct path to your video

const FlightDetails = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flightData, setFlightData] = useState([]);
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null); // Track which flight is being booked

  // Fetch flight details function
  const fetchFlightDetails = async () => {
    try {
      setError(""); // Clear previous errors
      setFlightData([]); // Reset previous data

      // Validate inputs
      if (!origin || !destination) {
        setError("Please enter both origin and destination.");
        return;
      }

      // API request to fetch flight details
      const response = await axios.get("http://localhost:3000/api/flights", {
        params: { origin, destination },
      });

      // Update state with flight data
      setFlightData(response.data);
    } catch (err) {
      // Handle errors
      if (err.response && err.response.status === 404) {
        setError("No flights found for the specified locations.");
      } else {
        setError("Failed to fetch flight details. Please try again.");
      }
    }
  };

  // Function to open booking section
  const handleBookNow = (flight) => {
    setBookingDetails({
      flight_name: flight.flight_name,
      flight_number: flight.flight_number,
      price_per_person: flight.price, // Set the base price
      passengers: 1, // Default to 1 passenger
      date: "",
    });
  };

  // Function to handle booking form inputs
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate total price based on number of passengers
  const calculateTotalPrice = () => {
    return bookingDetails.price_per_person * bookingDetails.passengers;
  };

  // Function to confirm booking
  const confirmBooking = () => {
    alert(
      `Booking confirmed!\nFlight: ${bookingDetails.flight_name}\nDate: ${bookingDetails.date}\nPassengers: ${bookingDetails.passengers}\nTotal Price: ₹${calculateTotalPrice()}`
    );
    setBookingDetails(null); // Reset after confirmation
  };

  return (
    <>
      <Navbar />

      <video autoPlay loop muted className="video-background">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flight-details-container">
        <h1>Search Flight Details</h1>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Origin Airport"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination Airport"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <button onClick={fetchFlightDetails}>Search</button>

        {error && <p className="error">{error}</p>}

        {flightData.length > 0 && (
          <div>
            <h2>Flight Details</h2>
            {flightData.map((flight, index) => (
              <div key={index} className="flight-card">
                <p>
                  <strong>Flight Number:</strong> {flight.flight_number}
                </p>
                <p>
                  <strong>Name:</strong> {flight.flight_name}
                </p>
                <p>
                  <strong>From:</strong> {flight.origin}
                </p>
                <p>
                  <strong>To:</strong> {flight.destination}
                </p>
                <p>
                  <strong>Departure Time:</strong> {flight.departure_time}
                </p>
                <p>
                  <strong>Arrival Time:</strong> {flight.arrival_time}
                </p>
                <p>
                  <strong>Price:</strong> ₹{flight.price}
                </p>
                <button
                  className="book-now-button"
                  onClick={() => handleBookNow(flight)}
                >
                  Book Now
                </button>

                {/* Booking Section */}
                {bookingDetails?.flight_number === flight.flight_number && (
                  <div className="booking-section">
                    <h3>Book Your Flight</h3>
                    <div className="booking-inputs">
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
                    </div>
                    <p>
                      <strong>Total Price:</strong> ₹{calculateTotalPrice()}
                    </p>
                    <button className="confirm-booking" onClick={confirmBooking}>
                      Confirm Booking
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default FlightDetails;
