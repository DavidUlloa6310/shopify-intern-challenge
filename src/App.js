import styles from "./styles/App.module.css";

import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <main className={styles["main"]}>
      <Navbar></Navbar>
      <h1>Explore Space.</h1>
      <PhotoGallery></PhotoGallery>
    </main>
  );
}

export default App;
