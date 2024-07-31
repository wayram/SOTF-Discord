import styles from "./NoPage.module.css"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header.jsx"

function NoPage() {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <i className='bx bxs-error'></i>
                <h1>404 - Page Not Found</h1>
                <p>Either something went wrong or the page doesn't exist anymore.</p>
                <Link to="/">Go Home</Link>
            </div>
            <Footer/>
        </>
    );
}

export default NoPage;
