const flights = {
    "flights": [
      {
        "flight_number": "AI202",
        "flight_name": "Air India - Delhi to Mumbai",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "departure_time": "2024-12-18T06:00:00",
        "arrival_time": "2024-12-18T08:00:00",
        "flight_type": "Domestic",
        "price": 3500
      },
      {
        "flight_number": "AI101",
        "flight_name": "Air India - Delhi to New York",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "John F. Kennedy International Airport, New York",
        "departure_time": "2024-12-18T11:00:00",
        "arrival_time": "2024-12-18T15:00:00",
        "flight_type": "International",
        "price": 60000
      },
      {
        "flight_number": "AI119",
        "flight_name": "Air India - Delhi to London",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Heathrow Airport, London",
        "departure_time": "2024-12-19T01:00:00",
        "arrival_time": "2024-12-19T06:30:00",
        "flight_type": "International",
        "price": 55000
      },
      {
        "flight_number": "AI202",
        "flight_name": "Air India - Mumbai to Chennai",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "Chennai International Airport, Chennai",
        "departure_time": "2024-12-20T07:00:00",
        "arrival_time": "2024-12-20T09:00:00",
        "flight_type": "Domestic",
        "price": 2500
      },
      {
        "flight_number": "AI121",
        "flight_name": "Air India - Mumbai to Singapore",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "Changi Airport, Singapore",
        "departure_time": "2024-12-20T15:00:00",
        "arrival_time": "2024-12-20T22:00:00",
        "flight_type": "International",
        "price": 40000
      },
      {
        "flight_number": "6E102",
        "flight_name": "IndiGo - Delhi to Bengaluru",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Kempegowda International Airport, Bengaluru",
        "departure_time": "2024-12-21T10:00:00",
        "arrival_time": "2024-12-21T12:30:00",
        "flight_type": "Domestic",
        "price": 3000
      },
      {
        "flight_number": "6E201",
        "flight_name": "IndiGo - Bengaluru to Chennai",
        "origin": "Kempegowda International Airport, Bengaluru",
        "destination": "Chennai International Airport, Chennai",
        "departure_time": "2024-12-21T13:00:00",
        "arrival_time": "2024-12-21T14:30:00",
        "flight_type": "Domestic",
        "price": 2800
      },
      {
        "flight_number": "6E206",
        "flight_name": "IndiGo - Chennai to Hyderabad",
        "origin": "Chennai International Airport, Chennai",
        "destination": "Rajiv Gandhi International Airport, Hyderabad",
        "departure_time": "2024-12-22T08:30:00",
        "arrival_time": "2024-12-22T10:00:00",
        "flight_type": "Domestic",
        "price": 2600
      },
      {
        "flight_number": "6E103",
        "flight_name": "IndiGo - Hyderabad to Kochi",
        "origin": "Rajiv Gandhi International Airport, Hyderabad",
        "destination": "Cochin International Airport, Kochi",
        "departure_time": "2024-12-23T06:00:00",
        "arrival_time": "2024-12-23T07:30:00",
        "flight_type": "Domestic",
        "price": 2700
      },
      {
        "flight_number": "9W566",
        "flight_name": "Jet Airways - Delhi to Dubai",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Dubai International Airport, Dubai",
        "departure_time": "2024-12-23T12:00:00",
        "arrival_time": "2024-12-23T14:00:00",
        "flight_type": "International",
        "price": 45000
      },
      {
        "flight_number": "9W234",
        "flight_name": "Jet Airways - Mumbai to Paris",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "Charles de Gaulle Airport, Paris",
        "departure_time": "2024-12-24T14:00:00",
        "arrival_time": "2024-12-24T21:00:00",
        "flight_type": "International",
        "price": 65000
      },
      {
        "flight_number": "9W522",
        "flight_name": "Jet Airways - Bengaluru to Frankfurt",
        "origin": "Kempegowda International Airport, Bengaluru",
        "destination": "Frankfurt Airport, Frankfurt",
        "departure_time": "2024-12-25T18:00:00",
        "arrival_time": "2024-12-26T06:00:00",
        "flight_type": "International",
        "price": 70000
      },
      {
        "flight_number": "AI307",
        "flight_name": "Air India - Delhi to Hong Kong",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Hong Kong International Airport, Hong Kong",
        "departure_time": "2024-12-26T22:30:00",
        "arrival_time": "2024-12-27T06:00:00",
        "flight_type": "International",
        "price": 50000
      },
      {
        "flight_number": "AI116",
        "flight_name": "Air India - Delhi to Sydney",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Sydney Kingsford Smith Airport, Sydney",
        "departure_time": "2024-12-27T09:00:00",
        "arrival_time": "2024-12-28T19:00:00",
        "flight_type": "International",
        "price": 85000
      },
      {
        "flight_number": "AI311",
        "flight_name": "Air India - Mumbai to Toronto",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "Toronto Pearson International Airport, Toronto",
        "departure_time": "2024-12-28T17:00:00",
        "arrival_time": "2024-12-29T06:30:00",
        "flight_type": "International",
        "price": 75000
      },
      {
        "flight_number": "6E111",
        "flight_name": "IndiGo - Mumbai to Goa",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "Dabolim Airport, Goa",
        "departure_time": "2024-12-29T10:00:00",
        "arrival_time": "2024-12-29T11:30:00",
        "flight_type": "Domestic",
        "price": 2200
      },
      {
        "flight_number": "6E130",
        "flight_name": "IndiGo - Delhi to Ahmedabad",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Sardar Vallabhbhai Patel International Airport, Ahmedabad",
        "departure_time": "2024-12-30T09:00:00",
        "arrival_time": "2024-12-30T10:30:00",
        "flight_type": "Domestic",
        "price": 2300
      },
      {
        "flight_number": "AI982",
        "flight_name": "Air India - Bengaluru to Maldives",
        "origin": "Kempegowda International Airport, Bengaluru",
        "destination": "Malé International Airport, Maldives",
        "departure_time": "2024-12-31T12:00:00",
        "arrival_time": "2024-12-31T15:00:00",
        "flight_type": "International",
        "price": 40000
      },
      {
        "flight_number": "AI107",
        "flight_name": "Air India - Delhi to Tokyo",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Narita International Airport, Tokyo",
        "departure_time": "2025-01-01T16:00:00",
        "arrival_time": "2025-01-02T06:30:00",
        "flight_type": "International",
        "price": 60000
      },
      {
        "flight_number": "6E100",
        "flight_name": "IndiGo - Chennai to Dubai",
        "origin": "Chennai International Airport, Chennai",
        "destination": "Dubai International Airport, Dubai",
        "departure_time": "2025-01-02T21:00:00",
        "arrival_time": "2025-01-03T00:30:00",
        "flight_type": "International",
        "price": 45000
      },
      {
        "flight_number": "AI123",
        "flight_name": "Air India - Kolkata to Bangalore",
        "origin": "Netaji Subhash Chandra Bose International Airport, Kolkata",
        "destination": "Kempegowda International Airport, Bengaluru",
        "departure_time": "2025-01-03T08:00:00",
        "arrival_time": "2025-01-03T09:30:00",
        "flight_type": "Domestic",
        "price": 3200
      },
      {
        "flight_number": "AI530",
        "flight_name": "Air India - Chennai to Dubai",
        "origin": "Chennai International Airport, Chennai",
        "destination": "Dubai International Airport, Dubai",
        "departure_time": "2025-01-04T22:30:00",
        "arrival_time": "2025-01-05T01:00:00",
        "flight_type": "International",
        "price": 46000
      },
      {
        "flight_number": "6E211",
        "flight_name": "IndiGo - Delhi to Kochi",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Cochin International Airport, Kochi",
        "departure_time": "2025-01-05T06:30:00",
        "arrival_time": "2025-01-05T08:00:00",
        "flight_type": "Domestic",
        "price": 3100
      },
      {
        "flight_number": "9W130",
        "flight_name": "Jet Airways - Delhi to Bangkok",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Suvarnabhumi Airport, Bangkok",
        "departure_time": "2025-01-06T14:00:00",
        "arrival_time": "2025-01-06T20:00:00",
        "flight_type": "International",
        "price": 48000
      },
      {
        "flight_number": "AI881",
        "flight_name": "Air India - Mumbai to London",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "Heathrow Airport, London",
        "departure_time": "2025-01-07T00:10:00",
        "arrival_time": "2025-01-07T06:15:00",
        "flight_type": "International",
        "price": 65000
      },
      {
        "flight_number": "6E137",
        "flight_name": "IndiGo - Ahmedabad to Jaipur",
        "origin": "Sardar Vallabhbhai Patel International Airport, Ahmedabad",
        "destination": "Jaipur International Airport, Jaipur",
        "departure_time": "2025-01-08T07:15:00",
        "arrival_time": "2025-01-08T08:30:00",
        "flight_type": "Domestic",
        "price": 2300
      },
      {
        "flight_number": "6E183",
        "flight_name": "IndiGo - Bengaluru to Pune",
        "origin": "Kempegowda International Airport, Bengaluru",
        "destination": "Pune International Airport, Pune",
        "departure_time": "2025-01-09T12:45:00",
        "arrival_time": "2025-01-09T14:00:00",
        "flight_type": "Domestic",
        "price": 2900
      },
      {
        "flight_number": "AI120",
        "flight_name": "Air India - Delhi to Sydney",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Sydney Kingsford Smith Airport, Sydney",
        "departure_time": "2025-01-10T20:00:00",
        "arrival_time": "2025-01-12T05:30:00",
        "flight_type": "International",
        "price": 85000
      },
      {
        "flight_number": "AI920",
        "flight_name": "Air India - Ahmedabad to Dubai",
        "origin": "Sardar Vallabhbhai Patel International Airport, Ahmedabad",
        "destination": "Dubai International Airport, Dubai",
        "departure_time": "2025-01-11T23:45:00",
        "arrival_time": "2025-01-12T02:30:00",
        "flight_type": "International",
        "price": 40000
      },
      {
        "flight_number": "AI410",
        "flight_name": "Air India - Kolkata to Bangkok",
        "origin": "Netaji Subhash Chandra Bose International Airport, Kolkata",
        "destination": "Suvarnabhumi Airport, Bangkok",
        "departure_time": "2025-01-12T05:00:00",
        "arrival_time": "2025-01-12T09:15:00",
        "flight_type": "International",
        "price": 42000
      },
      {
        "flight_number": "6E249",
        "flight_name": "IndiGo - Jaipur to Kolkata",
        "origin": "Jaipur International Airport, Jaipur",
        "destination": "Netaji Subhash Chandra Bose International Airport, Kolkata",
        "departure_time": "2025-01-13T09:30:00",
        "arrival_time": "2025-01-13T11:15:00",
        "flight_type": "Domestic",
        "price": 2500
      },
      {
        "flight_number": "9W610",
        "flight_name": "Jet Airways - Delhi to Singapore",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Changi Airport, Singapore",
        "departure_time": "2025-01-14T17:00:00",
        "arrival_time": "2025-01-14T23:45:00",
        "flight_type": "International",
        "price": 50000
      },
      {
        "flight_number": "AI581",
        "flight_name": "Air India - Delhi to Toronto",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Toronto Pearson International Airport, Toronto",
        "departure_time": "2025-01-15T13:45:00",
        "arrival_time": "2025-01-16T08:00:00",
        "flight_type": "International",
        "price": 70000
      },
      {
        "flight_number": "6E202",
        "flight_name": "IndiGo - Pune to Chennai",
        "origin": "Pune International Airport, Pune",
        "destination": "Chennai International Airport, Chennai",
        "departure_time": "2025-01-16T07:30:00",
        "arrival_time": "2025-01-16T09:00:00",
        "flight_type": "Domestic",
        "price": 2800
      },
      {
        "flight_number": "9W262",
        "flight_name": "Jet Airways - Mumbai to San Francisco",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "San Francisco International Airport, San Francisco",
        "departure_time": "2025-01-17T14:00:00",
        "arrival_time": "2025-01-17T22:30:00",
        "flight_type": "International",
        "price": 95000
      },
      {
        "flight_number": "AI503",
        "flight_name": "Air India - Mumbai to New York",
        "origin": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
        "destination": "John F. Kennedy International Airport, New York",
        "departure_time": "2025-01-18T02:00:00",
        "arrival_time": "2025-01-18T07:30:00",
        "flight_type": "International",
        "price": 85000
      },
      {
        "flight_number": "6E167",
        "flight_name": "IndiGo - Bengaluru to Delhi",
        "origin": "Kempegowda International Airport, Bengaluru",
        "destination": "Indira Gandhi International Airport, Delhi",
        "departure_time": "2025-01-19T13:00:00",
        "arrival_time": "2025-01-19T15:30:00",
        "flight_type": "Domestic",
        "price": 3000
      },
      {
        "flight_number": "AI247",
        "flight_name": "Air India - Delhi to Abu Dhabi",
        "origin": "Indira Gandhi International Airport, Delhi",
        "destination": "Abu Dhabi International Airport, Abu Dhabi",
        "departure_time": "2025-01-20T22:30:00",
        "arrival_time": "2025-01-21T00:00:00",
        "flight_type": "International",
        "price": 42000
      }
    ]
  };
  
  export default flights.flights;

  