import React from "react";

import styles from "../styles/components/PhotoContainer.module.css";

function PhotoContainer(props) {
  function createDate(date) {
    let dateArray = date.split("-");

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let monthIndex = parseInt(dateArray[1], 10) - 1;
    let month = months[monthIndex];
    return `${month} ${dateArray[2]}, ${dateArray[0]}`;
  }

  let data = props.data;
  return (
    <article className={`${styles["photo-container"]}`}>
      {data.url.includes("youtube") ? (
        <iframe title={data.url} src={data.url}></iframe>
      ) : (
        <img src={data.url} alt={data.title} />
      )}

      <div className={styles["photo-container__info-text"]}>
        <h2>{data.title}</h2>
        <h3>{createDate(data.date)}</h3>
      </div>
    </article>
  );
}

export default PhotoContainer;
