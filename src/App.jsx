import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ThemeProvider from "./constants/ThemeProvider";

function App() {
  return (
    <div className="App">
      {/* Home page where all the Components like 
          -> Header, Footer, Feeds, College Details
      */}
      {/* <ThemeProvider /> */}
      <Home />
      {/* Auth page, where all the Login, Register stuff will be held */}
      <ThemeProvider />
    </div>
  );
}

export default App;
