// src/components/Portfolio/index.js

import React from "react";
import movieTrackerImg from "../../assets/movie-search.jpg"; // Update path to your image

function Portfolio() {
  return (
    <section className="container">
      <h2>Work</h2>
      <div className="row">
        {/* Repeat this structure for all projects */}
        <div className="col-md-4">
          <div className="card">
            <img
              src={movieTrackerImg}
              className="card-img-top"
              alt="Movie Tracker"
            />
            <div className="card-body">
              <h5 className="card-title">Movie Tracker</h5>
              <p className="card-text">JavaScript/HTML/CSS/API</p>
              <a href="https://www.example.com" className="btn btn-primary">
                Go to project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
