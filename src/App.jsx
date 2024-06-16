import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Inspiration from './components/Inspiration';
import Footer from './components/Footer';
import Forge from './components/Forge';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Forge />
      <ProductList />
      <Inspiration />
      <Footer />
    </div>
  );
};

export default App;