// src/components/Resume/index.js

import React from "react";

function Resume() {
  return (
    <section className="container">
      <h2>Resume</h2>
      <p>Here is my resume...</p>
      <a
        href="/path_to_your_resume/resume.pdf"
        download
        className="btn btn-primary"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
