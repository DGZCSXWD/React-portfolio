// src/components/Contact/index.js

import React from "react";

function Contact() {
  return (
    <section className="container">
      <h2>Contact Me</h2>
      <ul>
        <li>Phone: 04 6666 6666</li>
        <li>
          Email: <a href="mailto:david.chen@xxx.com">david.chen@xxx.com</a>
        </li>
        <li>
          GitHub: <a href="https://www.example.com">GitHub</a>
        </li>
        <li>
          Twitter: <a href="https://www.example.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
