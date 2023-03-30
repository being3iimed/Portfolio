import React from "react";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />      
    </div>
  )
}

export default App
