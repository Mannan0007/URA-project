import React from 'react';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Tropical paradise with beautiful beaches and rich culture',
    price: '₹18990',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4'
  },
  {
    id: 2,
    name: 'Paris, France',
    description: 'Stunning white architecture and Mediterranean beauty',
    price: '₹129900',
    image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Tokyo, Newyork',
    description: 'Majestic mountains and scenic landscapes',
    price: '₹149900',
    image: 'https://images.pexels.com/photos/161309/traditional-and-technology-zojoji-temple-tokyo-culture-161309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'London, England',
    description: 'Majestic mountains and scenic landscapes',
    price: '₹149900',
    image: 'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Destinations = () => {
  return (
    <section className="destinations">
      <div className="section-title">
        <h2>Popular Destinations</h2>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img src={dest.image} alt={dest.name} />
            <div className="destination-info">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <span className="destination-price">From {dest.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;