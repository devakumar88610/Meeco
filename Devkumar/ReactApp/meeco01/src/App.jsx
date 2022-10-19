import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Home />
      <Services />
      <About />
      <Pricing />
      <Contact />
    </BrowserRouter>
  );
};

export default App;
