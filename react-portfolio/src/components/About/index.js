// src/components/About/index.js

import React from "react";
import avatar from "../../assets/myphoto.png";

function About() {
  return (
    <section className="container">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={avatar} alt="Avatar" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
