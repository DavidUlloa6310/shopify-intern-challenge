import React from "react";
import ReactDOM from "react-dom";

import styles from "../styles/components/PhotoText.module.css";

function PhotoText(props) {
  let modal = (
    <div className={styles["photo-text__bg"]} onClick={props.onClick}>
      <div className={styles["photo-text__card"]}>
        <p>{props.text}</p>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById("modal-hook"));
}

export default PhotoText;
