const trains = {
  "trains": [
    {
      "train_number": "12301",
      "train_name": "Howrah New Delhi Rajdhani Express",
      "origin_station": "Howrah Junction",
      "destination_station": "New Delhi",
      "departure_time": "16:50",
      "arrival_time": "10:05",
      "train_type": "Superfast Express",
      "price": 1500  // Added price
    },
    {
      "train_number": "12652",
      "train_name": "NZM-MGR Chennai Central Express",
      "origin_station": "Hazrat Nizamuddin",
      "destination_station": "Chennai Central",
      "departure_time": "15:35",
      "arrival_time": "20:10",
      "train_type": "Superfast Express",
      "price": 1200
    },
    {
      "train_number": "12295",
      "train_name": "Sanghamitra Express",
      "origin_station": "Bangalore City Junction",
      "destination_station": "Danapur",
      "departure_time": "09:00",
      "arrival_time": "19:25",
      "train_type": "Express",
      "price": 1000
    },
    {
      "train_number": "12951",
      "train_name": "Mumbai Rajdhani Express",
      "origin_station": "Mumbai Central",
      "destination_station": "New Delhi",
      "departure_time": "17:00",
      "arrival_time": "08:35",
      "train_type": "Superfast Express",
      "price": 1700
    },
    {
      "train_number": "12423",
      "train_name": "Rajdhani Express",
      "origin_station": "Dibrugarh",
      "destination_station": "New Delhi",
      "departure_time": "19:55",
      "arrival_time": "10:00",
      "train_type": "Superfast Express",
      "price": 1600
    },
    {
      "train_number": "22691",
      "train_name": "KSR Bengaluru-Hazrat Nizamuddin Rajdhani",
      "origin_station": "KSR Bengaluru City Junction",
      "destination_station": "Hazrat Nizamuddin",
      "departure_time": "20:00",
      "arrival_time": "05:40",
      "train_type": "Superfast Express",
      "price": 1500
    },
    {
      "train_number": "12049",
      "train_name": "Gatimaan Express",
      "origin_station": "Hazrat Nizamuddin",
      "destination_station": "Agra Cantt",
      "departure_time": "08:10",
      "arrival_time": "09:50",
      "train_type": "Express",
      "price": 500
    },
    {
      "train_number": "12701",
      "train_name": "Hussain Sagar Express",
      "origin_station": "Mumbai CST",
      "destination_station": "Hyderabad Deccan Nampally",
      "departure_time": "21:50",
      "arrival_time": "12:05",
      "train_type": "Express",
      "price": 700
    },
    {
      "train_number": "12839",
      "train_name": "Chennai Howrah Mail",
      "origin_station": "Chennai Central",
      "destination_station": "Howrah Junction",
      "departure_time": "23:00",
      "arrival_time": "03:00",
      "train_type": "Express",
      "price": 800
    },
    {
      "train_number": "12688",
      "train_name": "Dehradun Madurai Express",
      "origin_station": "Dehradun",
      "destination_station": "Madurai Junction",
      "departure_time": "06:45",
      "arrival_time": "19:45",
      "train_type": "Express",
      "price": 950
    },
    {
      "train_number": "12627",
      "train_name": "Karnataka Express",
      "origin_station": "Bangalore City Junction",
      "destination_station": "New Delhi",
      "departure_time": "19:20",
      "arrival_time": "09:00",
      "train_type": "Superfast Express",
      "price": 1400
    },
    {
      "train_number": "12864",
      "train_name": "Yesvantpur Howrah Express",
      "origin_station": "Yesvantpur Junction",
      "destination_station": "Howrah Junction",
      "departure_time": "19:35",
      "arrival_time": "10:55",
      "train_type": "Express",
      "price": 1100
    },
    {
      "train_number": "16526",
      "train_name": "KSR Bengaluru-Kanyakumari Express",
      "origin_station": "KSR Bengaluru City Junction",
      "destination_station": "Kanyakumari",
      "departure_time": "20:30",
      "arrival_time": "05:00",
      "train_type": "Express",
      "price": 900
    },
    {
      "train_number": "12904",
      "train_name": "Golden Temple Mail",
      "origin_station": "Amritsar Junction",
      "destination_station": "Mumbai Central",
      "departure_time": "21:25",
      "arrival_time": "05:20",
      "train_type": "Superfast Express",
      "price": 1300
    },
    {
      "train_number": "12487",
      "train_name": "Seemanchal Express",
      "origin_station": "Jogbani",
      "destination_station": "Anand Vihar Terminal",
      "departure_time": "20:10",
      "arrival_time": "06:00",
      "train_type": "Superfast Express",
      "price": 1200
    },
    {
      "train_number": "12565",
      "train_name": "Bihar Sampark Kranti Express",
      "origin_station": "Darbhanga Junction",
      "destination_station": "New Delhi",
      "departure_time": "08:30",
      "arrival_time": "06:15",
      "train_type": "Express",
      "price": 950
    },
    {
      "train_number": "12622",
      "train_name": "Tamil Nadu Express",
      "origin_station": "New Delhi",
      "destination_station": "Chennai Central",
      "departure_time": "22:30",
      "arrival_time": "07:10",
      "train_type": "Superfast Express",
      "price": 1600
    },
    {
      "train_number": "12214",
      "train_name": "Delhi-Lucknow Shatabdi Express",
      "origin_station": "New Delhi",
      "destination_station": "Lucknow Junction",
      "departure_time": "06:10",
      "arrival_time": "12:35",
      "train_type": "Express",
      "price": 700
    },
    {
      "train_number": "12225",
      "train_name": "Kaifiyat Express",
      "origin_station": "Azamgarh",
      "destination_station": "Delhi Junction",
      "departure_time": "16:25",
      "arrival_time": "06:00",
      "train_type": "Express",
      "price": 800
    },
    {
      "train_number": "12760",
      "train_name": "Charminar Express",
      "origin_station": "Hyderabad Deccan Nampally",
      "destination_station": "Chennai Egmore",
      "departure_time": "18:30",
      "arrival_time": "08:15",
      "train_type": "Express",
      "price": 650
    },
    {
      "train_number": "12618",
      "train_name": "Mangala Lakshadweep Express",
      "origin_station": "Hazrat Nizamuddin",
      "destination_station": "Ernakulam Junction",
      "departure_time": "09:15",
      "arrival_time": "10:10",
      "train_type": "Superfast Express",
      "price": 1300
    },
    {
      "train_number": "12625",
      "train_name": "Kerala Express",
      "origin_station": "New Delhi",
      "destination_station": "Trivandrum Central",
      "departure_time": "11:25",
      "arrival_time": "18:05",
      "train_type": "Superfast Express",
      "price": 1400
    },
    {
      "train_number": "12955",
      "train_name": "Mumbai Jaipur Superfast",
      "origin_station": "Mumbai Central",
      "destination_station": "Jaipur",
      "departure_time": "18:50",
      "arrival_time": "11:15",
      "train_type": "Superfast Express",
      "price": 1100
    },
    {
      "train_number": "12643",
      "train_name": "Nizamuddin Trivandrum Express",
      "origin_station": "Hazrat Nizamuddin",
      "destination_station": "Trivandrum Central",
      "departure_time": "14:20",
      "arrival_time": "18:05",
      "train_type": "Express",
      "price": 950
    },
    {
      "train_number": "12302",
      "train_name": "New Delhi Howrah Rajdhani Express",
      "origin_station": "New Delhi",
      "destination_station": "Howrah Junction",
      "departure_time": "16:55",
      "arrival_time": "10:00",
      "train_type": "Superfast Express",
      "price": 1500
    }
  ]
};

export default trains;
