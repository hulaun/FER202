import React from 'react';

function Header() {
  return (
    <header className="bg-dark-blue border-bottom mb-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand text-light" href="/">PhotoGallery</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/contact">Contact</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search photos..." aria-label="Search"/>
              <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
