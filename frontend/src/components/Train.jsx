import React, { useState } from "react";
import axios from "axios";
import "../styles/train.css"; // Import your CSS
import Navbar from "./Navbar";
import Footer from "./Footer";
import videoBg from "../images/trainbooking.mp4"; // Replace with correct path to your video

const TrainDetails = () => {
  const [originStation, setOriginStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");
  const [trainData, setTrainData] = useState([]);
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null); // Track which train is being booked

  // Fetch train details function
  const fetchTrainDetails = async () => {
    try {
      setError(""); // Clear previous errors
      setTrainData([]); // Reset previous data

      // Validate inputs
      if (!originStation || !destinationStation) {
        setError("Please enter both origin and destination stations.");
        return;
      }

      // API request to fetch train details
      const response = await axios.get("http://localhost:3000/api/trains", {
        params: { origin_station: originStation, destination_station: destinationStation },
      });

      // Update state with train data
      setTrainData(response.data);
    } catch (err) {
      // Handle errors
      if (err.response && err.response.status === 404) {
        setError("No trains found for the specified stations.");
      } else {
        setError("Failed to fetch train details. Please try again.");
      }
    }
  };

  // Function to open booking section
  const handleBookNow = (train) => {
    setBookingDetails({
      train_number: train.train_number,
      train_name: train.train_name,
      price_per_person: train.price, // Set the base price
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
      `Booking confirmed!\nTrain: ${bookingDetails.train_name}\nDate: ${bookingDetails.date}\nPassengers: ${bookingDetails.passengers}\nTotal Price: ₹${calculateTotalPrice()}`
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
      <div className="train-details-container">
        <h1>Search Train Details</h1>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Origin Station"
            value={originStation}
            onChange={(e) => setOriginStation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Destination Station"
            value={destinationStation}
            onChange={(e) => setDestinationStation(e.target.value)}
          />
        </div>
        <button onClick={fetchTrainDetails}>Search</button>

        {error && <p className="error">{error}</p>}

        {trainData.length > 0 && (
          <div>
            <h2>Train Details</h2>
            {trainData.map((train, index) => (
              <div key={index} className="train-card">
                <p>
                  <strong>Train Number:</strong> {train.train_number}
                </p>
                <p>
                  <strong>Name:</strong> {train.train_name}
                </p>
                <p>
                  <strong>From:</strong> {train.origin_station}
                </p>
                <p>
                  <strong>To:</strong> {train.destination_station}
                </p>
                <p>
                  <strong>Departure Time:</strong> {train.departure_time}
                </p>
                <p>
                  <strong>Arrival Time:</strong> {train.arrival_time}
                </p>
                <p>
                  <strong>Type:</strong> {train.train_type}
                </p>
                <p>
                  <strong>Price:</strong> ₹{train.price}
                </p>
                <button
                  className="book-now-button"
                  onClick={() => handleBookNow(train)}
                >
                  Book Now
                </button>

                {/* Booking Section */}
                {bookingDetails?.train_number === train.train_number && (
                  <div className="booking-section">
                    <h3>Book Your Tickets</h3>
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

export default TrainDetails;
