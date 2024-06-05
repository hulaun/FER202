import React from 'react';
import './Footer.css'; // Custom CSS for footer styles

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are a photo gallery website showcasing the beauty of various cities around the world.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: contact@photogallery.com<br />
              Phone: +123 456 7890
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Photo Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
