import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/KL_University_logo.svg/1200px-KL_University_logo.svg.png"
            className="food-munch-logo"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#admin">Admin</a></li>
            <li className="nav-item"><a className="nav-link" href="#user">Students</a></li>
          </ul>
        </div>
      </nav>

      <div className="banner-section-bg-container d-flex flex-column justify-content-center text-center p-5">
        <h1 className="banner-heading">Web-Based Platform for Managing Student Group Projects</h1>
        <p className="banner-caption">Coordinate tasks, track milestones, and manage submissions effectively.</p>
        <div className="mt-3">
          <button className="custom-button">Get Started</button>
          <button className="custom-outline-button">Learn More</button>
        </div>
      </div>

      <div className="wcu-section pt-5 pb-5" id="about">
        <div className="container">
          <h1 className="wcu-section-heading">Our Purpose</h1>
          <p className="wcu-section-description">
            This platform supports project management with shared workspaces and progress tracking.
          </p>
        </div>
      </div>

      <div className="explore-menu-section pt-5 pb-5" id="features">
        <div className="container">
          <h1 className="menu-section-heading">Key Features</h1>

          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 mb-3">
              <div className="wcu-card p-3">
                <img src="https://st3.depositphotos.com/7865540/13792/i/450/depositphotos_137922610-stock-photo-business-team-working.jpg" className="wcu-card-image" alt="feature" />
                <h1 className="wcu-card-title">Task Assignments</h1>
                <p className="wcu-card-description">Teachers assign group projects and students coordinate tasks.</p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-3">
              <div className="wcu-card p-3">
                <img src="https://www.bing.com/th/id/OIP.oKvieMD75xg-7qAfOH5EBgHaEK" className="wcu-card-image" alt="feature" />
                <h1 className="wcu-card-title">Progress Tracking</h1>
                <p className="wcu-card-description">Monitor progress and track milestones.</p>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 mb-3">
              <div className="wcu-card p-3">
                <img src="https://th.bing.com/th/id/OIP.BoI6_qry6BnfGhQAO_rRjQHaEc" className="wcu-card-image" alt="feature" />
                <h1 className="wcu-card-title">Collaboration Tools</h1>
                <p className="wcu-card-description">Work together effectively with shared tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="healthy-food-section pt-5 pb-5" id="admin">
        <div className="container">
          <h1 className="healthy-food-section-heading">For Admin (Teachers)</h1>
          <p className="healthy-food-section-description">Assign, monitor, and evaluate group projects.</p>
          <button className="custom-button">Login</button>
        </div>
      </div>

      <div className="delivery-and-payment-section pt-5 pb-5" id="user">
        <div className="container">
          <h1 className="delivery-and-payment-section-heading">For Students</h1>
          <p className="delivery-and-payment-section-description">Coordinate tasks and submit work.</p>
          <button className="custom-button">Login</button>
        </div>
      </div>

      <div className="footer-section pt-4 pb-4 text-center">
        <p className="footer-section-mail-id">studentprojects@support.com</p>
        <p className="footer-section-address">© 2025 Student Group Project Platform</p>
      </div>
    </>
  );
}

export default App;
