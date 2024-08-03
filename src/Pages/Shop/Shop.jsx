import styles from "./Shop.module.css"
import Header from "../../Header/Header.jsx"
import Market from "../../Market/Market.jsx"
import Footer from "../../Footer/Footer.jsx"

function Shop() {
  document.title = "SOTF Discord - Shop";
  return (
    <>
      <div className={styles.viewport}>
        <Header />
        <Market />
        <Footer />
      </div>
    </>
  )
}

export default Shop
