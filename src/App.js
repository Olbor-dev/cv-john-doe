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


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
