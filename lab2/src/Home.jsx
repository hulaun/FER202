import React, { useState } from 'react';
import './Home.css'; // Import custom CSS for styles

function Home() {
  const [pictures, setPictures] = useState([
    {
      name: 'Da Nang',
      image: 'vietnam.png',
      address: 'Viet Nam',
      featured: false,
    },
    {
      name: 'New York',
      image: 'newyork.png',
      address: 'USA',
      featured: false,
    },
    {
      name: 'Paris',
      image: 'paris.png',
      address: 'France',
      featured: false,
    },
    {
      name: 'Ho Chi Minh',
      image: 'hochiminh.png',
      address: 'Viet Nam',
      featured: true,
    },
    {
      name: 'Tokyo',
      image: 'tokyo.png',
      address: 'Japan',
      featured: true,
    },
    {
      name: 'Montreal',
      image: 'montreal.png',
      address: 'Spain',
      featured: true,
    },
    {
      name: 'Chicago',
      image: 'chicago.png',
      address: 'USA',
      featured: true,
    },
    {
      name: 'Aundalucia',
      image: 'aundalucia.png',
      address: 'Spain',
      featured: true,
    },
    {
      name: 'Hong Kong',
      image: 'hongkong.png',
      address: 'China',
      featured: true,
    },
    {
      name: 'North Goa',
      image: 'northgoa.png',
      address: 'India',
      featured: true,
    },
    // {
    //   name: 'Kochi',
    //   image: 'kochi.png',
    //   address: 'Kerala',
    //   featured: true,
    // },
  ]);

  return (
    <div >
      <hr className="divider" />
      <h1 className="title">The Night Life</h1>
      <hr className="divider" />
      <div className="row">
        {pictures.map((picture, index) => (
          <div key={index} className={index % 5 === 4 ? "col-sm-6 px-0" : "col-sm-3 px-0"}>
            <div className="card bg-dark text-white" style={{ height: "300px", position: "relative" }}>
              <img
                src={picture.image}
                className="card-img"
                alt={picture.name}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title">{picture.name}</h5>
                <p className="card-text">{picture.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
