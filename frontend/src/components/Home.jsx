import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Destinations from './Destinations' 
import Packages from './Packages' 
import Gallery from './Gallery' ;
import Newsletter from './Newsletter' 
import Footer from './Footer' 
// import other components like Destinations, Packages, etc.

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <Packages />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
