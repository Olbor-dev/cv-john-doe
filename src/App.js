/*
import { Accueil } from "./components/Accueil";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


const App = () => {
  return (
    <div className="App">
      <Header />        
      <Accueil />
      <Footer />
    </div>
  );
}

export default App;
*/
import React from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Blog from "./pages/Blog";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
