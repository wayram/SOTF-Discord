import styles from "./Footer.module.css";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerItem}>
                    <Link to="/"><h1>FRPMANIA</h1></Link>
                    <div className={styles.socials}>
                        <a href="https://discord.com"><i className='bx bxl-discord-alt'></i></a>
                        <a href="https://www.instagram.com/frpmania/"><i className='bx bxl-instagram'></i></a>
                    </div>
                </div>
                <div className={styles.footerItem}>
                    <h1>Useful Links</h1>
                    <span>
                        <Link to="/">Home</Link>
                        <Link to="/all">Movies</Link>
                        <Link to="/all">Series</Link>
                        <Link to="/discord">Discord</Link>
                        <Link to="/request">Request</Link>
                    </span>
                </div>
                <div className={styles.footerItem}>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus esse numquam, cumque reprehenderit asperiores beatae officiis cum qui doloremque quos mollitia atque est. Natus corporis laborum saepe sint non velit!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <p>Copyright ©2024 FRPMANIA. All rights reserved.</p>
                <span><Link to="/status"><i className='bx bxs-check-circle' ></i> All services are online</Link></span>
                <span>
                    <Link to="/contact">Contact</Link>
                    <Link to="/dmca">DMCA</Link>
                    <Link to="/tos">Terms of Service</Link>
                    <Link to="/faq">FAQ</Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
