import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-left">
        <li>
          <a href="/">Publish</a>
        </li>
        <li>
          <a href="/">Business</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">How search works</a>
        </li>
      </ul>
      <ul className="footer-right">
        <li>
          <a href="/">Privacy</a>
        </li>
        <li>
          <a href="/">Conditions</a>
        </li>
        <li>
          <a href="/">References</a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
