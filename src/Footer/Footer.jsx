import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import textLogo from '../assets/sotfdiscordlogo.png';
import kelvinPeaking from "../assets/kelvinPeaking.png";
import kelvinHover from "../assets/kelvinAlerted.png";

function Footer() {
  const [showKelvin, setShowKelvin] = useState(false);
  const [kelvinSrc, setKelvinSrc] = useState(kelvinPeaking);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setShowKelvin(bottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      {showKelvin && (
        <img
          src={kelvinSrc}
          alt="kelvin peaking"
          className={`${styles.kelvinPeaking} ${styles.showKelvin}`}
          onMouseEnter={() => setKelvinSrc(kelvinHover)}
          onMouseLeave={() => setKelvinSrc(kelvinPeaking)}
        />
      )}
      <div className={`${styles.footerItem} ${styles.logoAndDisclaimer}`}>
        <img src={textLogo} alt="textlogo" />
        <p>Our Discord Server Is Not Affiliated With <Link to="https://endnightgames.com/">Endnight Games</Link>.</p>
      </div>
      <div className={`${styles.footerItem} ${styles.links}`}>
        <h2>Links</h2>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="https://www.reddit.com/r/TheForest/">The Forest Reddit</Link>
        <Link to="https://www.reddit.com/r/SonsOfTheForest/">SoTF Reddit</Link>
        <Link to="https://sonsoftheforest.wiki.gg/wiki/Sons_of_the_Forest_Wiki">SoTF Wiki</Link>
        <Link to="https://sotf-mods.com/">SoTF Mods</Link>
      </div>
      <div className={`${styles.footerItem} ${styles.about}`}>
        <h2>About</h2>
        <p>The official Discord server of the The Forest & Sons of The Forest subreddits! Discuss the games here + LFG channels! Our Discord server boasts a vibrant community of over 40,000 members, all passionate about Endnight's games, "The Forest" and "Sons of the Forest". Join us for discussions, tips, and a lively exchange of ideas with fellow survivors!</p>
      </div>
      <span><Link to="https://github.com/wayram">❤️ Developed by wayram. 2024</Link></span>
    </footer>
  );
}

export default Footer;
