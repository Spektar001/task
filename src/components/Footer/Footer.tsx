import React from "react";
import "./Footer.css";

export const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__year">{year}</p>
    </footer>
  );
};
