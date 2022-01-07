import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "../styles/components/PhotoGallery.module.css";

function PhotoGallery(props) {
  let [response, setResponse] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_TOKEN}&date=2022-01-04`
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
      <img src={response.url} alt={response.title} />
    </div>
  );
}

export default PhotoGallery;
