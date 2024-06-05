import React from 'react';
import './Sidebar.css';

function Sidebar({ genres, cities, filterByGenre, filterByCity, isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <h5>Genres</h5>
      <ul>
        {genres.map((genre, index) => (
          <li key={index} onClick={() => filterByGenre(genre)}>
            {genre}
          </li>
        ))}
      </ul>
      <h5>Cities</h5>
      <ul>
        {cities.map((city, index) => (
          <li key={index} onClick={() => filterByCity(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
