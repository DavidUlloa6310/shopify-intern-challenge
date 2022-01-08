import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "../styles/components/PhotoGallery.module.css";

import PhotoContainer from "./PhotoContainer";

function PhotoGallery(props) {
  let [response, setResponse] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_TOKEN}&start_date=2021-12-01&end_date=2021-12-27`
        );

        setResponse(await response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles["grid"]}>
      {response.map((photoData) => {
        return <PhotoContainer data={photoData} key={photoData.title} />;
      })}
    </div>
  );
}

export default PhotoGallery;
