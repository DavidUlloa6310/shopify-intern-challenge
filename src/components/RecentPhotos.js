import React, { useEffect, useState } from "react";

import axios from "axios";

import PhotoContainer from "./PhotoContainer";

import styles from "../styles/components/RecentPhotos.module.css";

function RecentPhotos(props) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let today = new Date();
        let day = String(today.getDate()).padStart(2, "0");
        var month = String(today.getMonth() + 1).padStart(2, "0");
        var year = today.getFullYear();

        let threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        let oldDay = String(threeDaysAgo.getDate()).padStart(2, "0");
        let oldMonth = String(threeDaysAgo.getMonth() + 1).padStart(2, "0");
        var oldYear = threeDaysAgo.getFullYear();

        let response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_TOKEN}&start_date=${oldYear}-${oldMonth}-${oldDay}&end_date=${year}-${month}-${day}`
        );
        setResponse(response.data.reverse());
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
    <>
      <h2>Recent Photos</h2>
      <div className={styles["recent-photos-grid"]}>
        {response.map((photoData) => {
          return <PhotoContainer data={photoData} key={photoData.title} />;
        })}
      </div>
    </>
  );
}

export default RecentPhotos;
