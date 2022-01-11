import React from "react";

import styles from "../styles/components/PhotoForm.module.css";

function PhotoForm(props) {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var year = today.getFullYear();

  function startHandler(event) {
    props.setStartDate(event.target.value);
  }

  function endHandler(event) {
    props.setEndDate(event.target.value);
  }

  return (
    <div className={styles["photo-form__div"]}>
      <h2>Photo Gallery</h2>
      <form
        className={styles["photo-form__form"]}
        onSubmit={props.submitHandler}
      >
        <div>
          <h3>Start Date</h3>
          <input
            type="date"
            max={`${year}-${month}-${day}`}
            onChange={startHandler}
            value={props.startDate}
          />
        </div>
        <div>
          <h3>End Date</h3>
          <input
            type="date"
            max={`${year}-${month}-${day}`}
            onChange={endHandler}
            value={props.endDate}
          />
        </div>
        <button className={styles["photo-form__button"]}>Search</button>
      </form>
    </div>
  );
}

export default PhotoForm;
