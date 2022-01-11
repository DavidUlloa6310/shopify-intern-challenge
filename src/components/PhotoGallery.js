import React, { useState } from "react";

import axios from "axios";

import styles from "../styles/components/PhotoGallery.module.css";

import PhotoContainer from "./PhotoContainer";
import PhotoForm from "./PhotoForm";

function PhotoGallery(props) {
  let [response, setResponse] = useState([]);
  let [loading, setLoading] = useState(false);

  let [startDate, setStartDate] = useState(null);
  let [endDate, setEndDate] = useState(null);

  let [error, setError] = useState(false);

  async function fetchData() {
    try {
      if (new Date(startDate).getTime() > new Date(endDate).getTime()) {
        console.log("TEST");
        return setError("Please set the start date before the end date.");
      } else {
        setError(false);
      }

      setLoading(true);
      let response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_TOKEN}&start_date=${startDate}&end_date=${endDate}`
      );
      setResponse(response.data.reverse());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (
      startDate === null ||
      endDate === null ||
      startDate === "" ||
      endDate === ""
    ) {
      return setError("Please fill in start date and end date.");
    }

    fetchData();
  }

  return (
    <div className={styles["photo-gallery"]}>
      <PhotoForm
        onSubmit={fetchData}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        submitHandler={submitHandler}
        startDate={startDate}
        endDate={endDate}
      ></PhotoForm>
      {error ? <h3>{error}</h3> : null}
      {startDate === null || endDate === null || response === [] ? (
        <h3>Please insert a start and end date</h3>
      ) : (
        <div className={styles["photo-gallery-grid"]}>
          {response.map((photoData) => {
            return <PhotoContainer data={photoData} key={photoData.title} />;
          })}
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
