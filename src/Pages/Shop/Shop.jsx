import styles from "./Shop.module.css"
import Header from "../../Header/Header.jsx"
import Market from "../../Market/Market.jsx"
import Footer from "../../Footer/Footer.jsx"
import { Link } from 'react-router-dom'

function Shop() {
  document.title = "SOTF Discord - Shop";
  return (
    <>
      <div className={styles.viewport}>
        <Link to='/'><h1>Shop Coming Soon...</h1></Link>
        <Link to='https://discord.com/channels/268142459844952064/shop'><p>Current Shop <i className='bx bxl-discord-alt'></i></p></Link>
      </div>
    </>
  )
}

export default Shop
