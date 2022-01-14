import React, { useState } from "react";

import PhotoText from "./PhotoText";

import styles from "../styles/components/PhotoContainer.module.css";

import { FaHeart, FaEnvelopeOpenText } from "react-icons/fa";

function PhotoContainer(props) {
  let data = props.data;

  const [isLiked, setIsLiked] = useState(
    localStorage.getItem(data.title) === "true"
  );

  const [showText, setShowText] = useState(false);

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

  function likeHandler() {
    if (isLiked) {
      localStorage.setItem(data.title, "false");
      setIsLiked(false);
    } else {
      localStorage.setItem(data.title, "true");
      setIsLiked(true);
    }
  }

  function setShowTextTrue() {
    setShowText(true);
  }

  function setShowTextFalse() {
    setShowText(false);
  }

  return (
    <>
      {showText ? (
        <PhotoText text={data.explanation} onClick={setShowTextFalse} />
      ) : null}
      <article className={`${styles["photo-container"]}`}>
        {data.url.includes("youtube") ? (
          <iframe title={data.url} src={data.url}></iframe>
        ) : (
          <img src={data.url} alt={data.title} />
        )}

        <div className={styles["photo-container__bar"]}>
          <div>
            <h3>{data.title}</h3>
            <h3>{createDate(data.date)}</h3>
          </div>
          <div className={`${styles["photo-container__icons"]}`}>
            <FaHeart
              size={30}
              className={`${styles["photo-container__icon"]} ${
                isLiked ? styles["photo-container__clicked"] : ""
              }`}
              onClick={likeHandler}
            ></FaHeart>
            <FaEnvelopeOpenText
              size={30}
              className={styles["photo-container__icon"]}
              onClick={setShowTextTrue}
            ></FaEnvelopeOpenText>
          </div>
        </div>
      </article>
    </>
  );
}

export default PhotoContainer;
