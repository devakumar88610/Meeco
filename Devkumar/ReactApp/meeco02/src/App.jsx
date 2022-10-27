import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

import NavigationBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
