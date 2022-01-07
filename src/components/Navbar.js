import React from "react";

import styles from "../styles/components/Navbar.module.css";

import logo from "../assets/NASA_logo.svg.png";

function Navbar(props) {
  return (
    <nav className={styles["navbar"]}>
      <img src={logo} alt="NASA Logo" className={styles["navbar__logo"]} />
    </nav>
  );
}

export default Navbar;
