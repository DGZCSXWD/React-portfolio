// src/components/Footer/index.js

import React from "react";

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-dark text-white text-center py-3">
      <p>Copyright &copy; {new Date().getFullYear()} David Chen</p>
    </footer>
  );
}

export default Footer;
