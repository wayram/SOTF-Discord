import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"

function Header({ className }) {
    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles.headerItem}>
                <img src={logo} alt="frpmania" width="200px"/>
            </div>
            <div className={`${styles.headerItem} ${styles.headerList}`}>
                <Link to="/">HOME</Link>
                <Link to="/all">MOVIES</Link>
                <Link to="/all">SERIES</Link>
                <Link to="/request">REQUEST</Link>
            </div>
        </header>
    );
};

export default Header;
