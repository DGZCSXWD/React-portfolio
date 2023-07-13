// src/components/Contact/index.js

import React from "react";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <section className="container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="nameInput" required />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            required
          />
          <div className="invalid-feedback">Please provide a valid email.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
