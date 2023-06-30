import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewSong from "./AddNewSong";
import Home from "./Home";
import NavBar from "./NavBar";
import UpdateSong from "./UpdateSong";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newSong" element={<AddNewSong />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
