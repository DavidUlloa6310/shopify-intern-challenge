import styles from "./styles/App.module.css";

import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import PhotoContainer from "./components/PhotoContainer";
import RecentPhotos from "./components/RecentPhotos";

function App() {
  return (
    <main className={styles["main"]}>
      <Navbar></Navbar>
      <h1>Explore Space.</h1>
      <RecentPhotos />
      <PhotoGallery></PhotoGallery>
    </main>
  );
}

export default App;
