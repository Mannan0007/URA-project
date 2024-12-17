import React from 'react';
import './Hero.css';

const Hero = () => {

  const scroll=()=>{
    const section=document.getElementById('explore-section');
    if(section){
      section.scrollIntoView({ behavior: 'smooth' });
    }

  }
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Explore the World with GoVenture</h1>
        <p>Discover amazing destinations and create unforgettable memories</p>
        <button className="explore-btn" onClick={scroll}>Start Exploring</button>
      </div>
      <div className="image-slider">
        <img src="https://images.pexels.com/photos/29793400/pexels-photo-29793400/free-photo-of-serene-snow-covered-norwegian-mountainscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nature" />
      </div>
    </div>
  );
};

export default Hero;
