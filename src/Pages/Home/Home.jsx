import styles from "./Home.module.css"
import Header from "../../Header/Header.jsx"
import Landing from "../../Landing/Landing.jsx"
import Footer from "../../Footer/Footer.jsx"

function Home() {
  document.title = "SOTF Discord - Home";
  return (
    <>
      <div className={styles.viewport}>
        <Header />
        <Landing />
        <Footer />
      </div>
    </>
  )
}

export default Home
