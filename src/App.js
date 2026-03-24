import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Banner from './components/Banner';
import About from './components/aboutus';
import Media from './components/media';
import ProductGrid from './components/ProductGride';
import Content from './components/content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Banner />
      <About />
      <ProductGrid />
      <Media />
      <Content />
      <Footer />
      {/* Rest of your website content */}
    </div>
  );
}

export default App;