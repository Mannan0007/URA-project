const cabs = {
    "cabs": [
      {
        "cab_number": "DL01AB1234",
        "cab_name": "Sedan - Delhi to Agra",
        "origin": "Delhi",
        "destination": "Agra",
        "departure_time": "2024-12-18T06:00:00",
        "arrival_time": "2024-12-18T10:00:00",
        "cab_type": "Sedan",
        "driver_name": "Rajesh Kumar",
        "contact": "9876543210",
        "price": 3500
      },
      {
        "cab_number": "MH02CD5678",
        "cab_name": "SUV - Mumbai to Pune",
        "origin": "Mumbai",
        "destination": "Pune",
        "departure_time": "2024-12-18T07:00:00",
        "arrival_time": "2024-12-18T10:00:00",
        "cab_type": "SUV",
        "driver_name": "Sandeep Singh",
        "contact": "9087654321",
        "price": 4500
      },
      {
        "cab_number": "KA03EF6789",
        "cab_name": "Hatchback - Bengaluru to Mysuru",
        "origin": "Bengaluru",
        "destination": "Mysuru",
        "departure_time": "2024-12-18T08:00:00",
        "arrival_time": "2024-12-18T11:00:00",
        "cab_type": "Hatchback",
        "driver_name": "Ramesh Gowda",
        "contact": "8786543210",
        "price": 2000
      },
      {
        "cab_number": "TN04GH3456",
        "cab_name": "SUV - Chennai to Pondicherry",
        "origin": "Chennai",
        "destination": "Pondicherry",
        "departure_time": "2024-12-18T09:00:00",
        "arrival_time": "2024-12-18T12:00:00",
        "cab_type": "SUV",
        "driver_name": "Vijay Kumar",
        "contact": "9876012345",
        "price": 3200
      },
      {
        "cab_number": "RJ05IJ5678",
        "cab_name": "Sedan - Jaipur to Udaipur",
        "origin": "Jaipur",
        "destination": "Udaipur",
        "departure_time": "2024-12-18T10:00:00",
        "arrival_time": "2024-12-18T15:00:00",
        "cab_type": "Sedan",
        "driver_name": "Manoj Sharma",
        "contact": "9901234567",
        "price": 4000
      },
      {
        "cab_number": "WB06KL7890",
        "cab_name": "Hatchback - Kolkata to Digha",
        "origin": "Kolkata",
        "destination": "Digha",
        "departure_time": "2024-12-18T11:00:00",
        "arrival_time": "2024-12-18T14:00:00",
        "cab_type": "Hatchback",
        "driver_name": "Arun Das",
        "contact": "9898765432",
        "price": 1800
      },
      {
        "cab_number": "UP07MN1234",
        "cab_name": "SUV - Lucknow to Varanasi",
        "origin": "Lucknow",
        "destination": "Varanasi",
        "departure_time": "2024-12-18T12:00:00",
        "arrival_time": "2024-12-18T16:00:00",
        "cab_type": "SUV",
        "driver_name": "Rahul Verma",
        "contact": "7890123456",
        "price": 3600
      },
      {
        "cab_number": "HR08OP5678",
        "cab_name": "Sedan - Chandigarh to Shimla",
        "origin": "Chandigarh",
        "destination": "Shimla",
        "departure_time": "2024-12-18T13:00:00",
        "arrival_time": "2024-12-18T17:00:00",
        "cab_type": "Sedan",
        "driver_name": "Harjeet Singh",
        "contact": "9988776655",
        "price": 2500
      },
      {
        "cab_number": "MP09QR3456",
        "cab_name": "Hatchback - Bhopal to Indore",
        "origin": "Bhopal",
        "destination": "Indore",
        "departure_time": "2024-12-18T14:00:00",
        "arrival_time": "2024-12-18T17:00:00",
        "cab_type": "Hatchback",
        "driver_name": "Anil Gupta",
        "contact": "8877665544",
        "price": 1900
      },
      {
        "cab_number": "GJ10ST7890",
        "cab_name": "SUV - Ahmedabad to Surat",
        "origin": "Ahmedabad",
        "destination": "Surat",
        "departure_time": "2024-12-18T15:00:00",
        "arrival_time": "2024-12-18T19:00:00",
        "cab_type": "SUV",
        "driver_name": "Nilesh Patel",
        "contact": "9090909090",
        "price": 4200
      },
      {
        "cab_number": "TN11UV2345",
        "cab_name": "Sedan - Coimbatore to Madurai",
        "origin": "Coimbatore",
        "destination": "Madurai",
        "departure_time": "2024-12-18T16:00:00",
        "arrival_time": "2024-12-18T20:00:00",
        "cab_type": "Sedan",
        "driver_name": "Prakash Raj",
        "contact": "7894561230",
        "price": 3100
      },
      {
        "cab_number": "AP12WX3456",
        "cab_name": "SUV - Hyderabad to Vijayawada",
        "origin": "Hyderabad",
        "destination": "Vijayawada",
        "departure_time": "2024-12-18T17:00:00",
        "arrival_time": "2024-12-18T20:00:00",
        "cab_type": "SUV",
        "driver_name": "Sudheer Rao",
        "contact": "7896543210",
        "price": 3000
      },
      {
        "cab_number": "KL13YZ6789",
        "cab_name": "Hatchback - Kochi to Munnar",
        "origin": "Kochi",
        "destination": "Munnar",
        "departure_time": "2024-12-18T18:00:00",
        "arrival_time": "2024-12-18T21:00:00",
        "cab_type": "Hatchback",
        "driver_name": "Mathew Varghese",
        "contact": "9881234567",
        "price": 2000
      },
      {
        "cab_number": "CG14AB8901",
        "cab_name": "Sedan - Raipur to Bilaspur",
        "origin": "Raipur",
        "destination": "Bilaspur",
        "departure_time": "2024-12-18T19:00:00",
        "arrival_time": "2024-12-18T22:00:00",
        "cab_type": "Sedan",
        "driver_name": "Arvind Kumar",
        "contact": "9098765432",
        "price": 2200
      },
      {
        "cab_number": "PB15CD3456",
        "cab_name": "SUV - Amritsar to Ludhiana",
        "origin": "Amritsar",
        "destination": "Ludhiana",
        "departure_time": "2024-12-18T20:00:00",
        "arrival_time": "2024-12-18T23:00:00",
        "cab_type": "SUV",
        "driver_name": "Gurpreet Singh",
        "contact": "9987654321",
        "price": 3000
      },
      {
        "cab_number": "CAB101",
        "cab_name": "Uber Black - New York to Boston",
        "origin": "JFK International Airport, New York, USA",
        "destination": "Boston Logan International Airport, Boston, USA",
        "departure_time": "2024-12-18T08:00:00",
        "arrival_time": "2024-12-18T12:00:00",
        "cab_type": "International",
        "price": 220
      },
      {
        "cab_number": "CAB102",
        "cab_name": "Lyft Premier - London to Manchester",
        "origin": "Heathrow Airport, London, UK",
        "destination": "Manchester Airport, Manchester, UK",
        "departure_time": "2024-12-18T09:00:00",
        "arrival_time": "2024-12-18T12:30:00",
        "cab_type": "International",
        "price": 180
      },
      {
        "cab_number": "CAB103",
        "cab_name": "Grab Executive - Singapore to Kuala Lumpur",
        "origin": "Changi Airport, Singapore",
        "destination": "KL International Airport, Kuala Lumpur, Malaysia",
        "departure_time": "2024-12-18T07:00:00",
        "arrival_time": "2024-12-18T11:00:00",
        "cab_type": "International",
        "price": 150
      },
      {
        "cab_number": "CAB104",
        "cab_name": "Careem Lux - Dubai to Abu Dhabi",
        "origin": "Dubai International Airport, Dubai, UAE",
        "destination": "Abu Dhabi International Airport, Abu Dhabi, UAE",
        "departure_time": "2024-12-18T06:30:00",
        "arrival_time": "2024-12-18T08:30:00",
        "cab_type": "International",
        "price": 200
      },
      {
        "cab_number": "CAB105",
        "cab_name": "Bolt Elite - Berlin to Munich",
        "origin": "Berlin Brandenburg Airport, Berlin, Germany",
        "destination": "Munich International Airport, Munich, Germany",
        "departure_time": "2024-12-18T10:00:00",
        "arrival_time": "2024-12-18T15:00:00",
        "cab_type": "International",
        "price": 300
      },
      {
        "cab_number": "CAB106",
        "cab_name": "Ola Prime - Sydney to Canberra",
        "origin": "Sydney International Airport, Sydney, Australia",
        "destination": "Canberra International Airport, Canberra, Australia",
        "departure_time": "2024-12-18T12:00:00",
        "arrival_time": "2024-12-18T15:30:00",
        "cab_type": "International",
        "price": 250
      },
      {
        "cab_number": "CAB107",
        "cab_name": "Uber Comfort - Toronto to Montreal",
        "origin": "Toronto Pearson Airport, Toronto, Canada",
        "destination": "Montreal-Trudeau Airport, Montreal, Canada",
        "departure_time": "2024-12-18T11:00:00",
        "arrival_time": "2024-12-18T16:00:00",
        "cab_type": "International",
        "price": 350
      },
      {
        "cab_number": "CAB108",
        "cab_name": "Grab Business - Bangkok to Pattaya",
        "origin": "Suvarnabhumi Airport, Bangkok, Thailand",
        "destination": "U-Tapao International Airport, Pattaya, Thailand",
        "departure_time": "2024-12-18T14:00:00",
        "arrival_time": "2024-12-18T16:00:00",
        "cab_type": "International",
        "price": 80
      },
      {
        "cab_number": "CAB109",
        "cab_name": "Careem Premier - Riyadh to Jeddah",
        "origin": "King Khalid International Airport, Riyadh, Saudi Arabia",
        "destination": "King Abdulaziz International Airport, Jeddah, Saudi Arabia",
        "departure_time": "2024-12-18T09:00:00",
        "arrival_time": "2024-12-18T12:00:00",
        "cab_type": "International",
        "price": 230
      },
      {
        "cab_number": "CAB110",
        "cab_name": "Lyft Lux - Paris to Brussels",
        "origin": "Charles de Gaulle Airport, Paris, France",
        "destination": "Brussels Airport, Brussels, Belgium",
        "departure_time": "2024-12-18T07:30:00",
        "arrival_time": "2024-12-18T11:00:00",
        "cab_type": "International",
        "price": 270
      },
      {
        "cab_number": "CAB111",
        "cab_name": "UberXL - Los Angeles to San Diego",
        "origin": "LAX International Airport, Los Angeles, USA",
        "destination": "San Diego International Airport, San Diego, USA",
        "departure_time": "2024-12-18T06:00:00",
        "arrival_time": "2024-12-18T08:30:00",
        "cab_type": "International",
        "price": 160
      },
      {
        "cab_number": "CAB112",
        "cab_name": "Bolt Premium - Rome to Milan",
        "origin": "Rome Fiumicino Airport, Rome, Italy",
        "destination": "Milan Malpensa Airport, Milan, Italy",
        "departure_time": "2024-12-18T10:00:00",
        "arrival_time": "2024-12-18T14:30:00",
        "cab_type": "International",
        "price": 320
      },
      {
        "cab_number": "CAB113",
        "cab_name": "Careem Economy - Cairo to Alexandria",
        "origin": "Cairo International Airport, Cairo, Egypt",
        "destination": "Borg El Arab Airport, Alexandria, Egypt",
        "departure_time": "2024-12-18T08:30:00",
        "arrival_time": "2024-12-18T11:00:00",
        "cab_type": "International",
        "price": 90
      },
      {
        "cab_number": "CAB114",
        "cab_name": "Ola Select - Mumbai to Pune",
        "origin": "Chhatrapati Shivaji Airport, Mumbai, India",
        "destination": "Pune International Airport, Pune, India",
        "departure_time": "2024-12-18T13:00:00",
        "arrival_time": "2024-12-18T15:30:00",
        "cab_type": "International",
        "price": 70
      },
      {
        "cab_number": "CAB115",
        "cab_name": "Uber Premium - Tokyo to Yokohama",
        "origin": "Narita International Airport, Tokyo, Japan",
        "destination": "Yokohama International Airport, Yokohama, Japan",
        "departure_time": "2024-12-18T15:00:00",
        "arrival_time": "2024-12-18T17:00:00",
        "cab_type": "International",
        "price": 140
      }
    ]
  };

  export default cabs;
  