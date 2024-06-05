import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  const [filter, setFilter] = useState({ genre: null, city: null });
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const genres = ["Nightlife", "Cityscape", "Romantic", "Adventure", "Beach"];
  const cities = [
    "Viet Nam",
    "USA",
    "France",
    "Japan",
    "Spain",
    "China",
    "India",
    "Kerala",
  ];

  const filterByGenre = (genre) => {
    setFilter((prevFilter) => ({ ...prevFilter, genre }));
  };

  const filterByCity = (city) => {
    setFilter((prevFilter) => ({ ...prevFilter, city }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header />
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="main-content">
        <Sidebar
          genres={genres}
          cities={cities}
          filterByGenre={filterByGenre}
          filterByCity={filterByCity}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Home filter={filter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
