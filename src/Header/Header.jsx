import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import textLogo from '../assets/sotfdiscordlogo.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        <Link to="/"><img src={textLogo} alt="textlogo" /></Link>
      </div>
      <div className={styles.headerItem}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <div className={styles.vertLine}></div>
          <Link to="https://www.reddit.com/r/TheForest/">The Forest <i className='bx bxl-reddit'></i></Link>
          <Link to="https://www.reddit.com/r/SonsOfTheForest/">SoTF <i className='bx bxl-reddit'></i></Link>
          <Link to="https://sonsoftheforest.wiki.gg/wiki/Sons_of_the_Forest_Wiki">SoTF Wiki <i className='bx bxl-wikipedia' ></i></Link>
          <Link to="https://sotf-mods.com/">SoTF Mods <i className='bx bxs-cog' ></i></Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
