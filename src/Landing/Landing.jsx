import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import textLogo from '../assets/sotfdiscordlogo.png'
import skull from '../assets/skull.png'

function Landing() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://discord.com/api/v8/invites/sotf?with_counts=true');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.landingContainer}>
        <div className={styles.landingContent}>
            <div className={styles.landingLeft}>
              <div className={styles.text}>
                <img src={textLogo} alt="textlogo" />
                <p>The official discord server of the The Forest & Sons of The Forest subreddits! Discuss the games here + LFG channels!</p>
                <span>
                  <Link to="https://discord.gg/sotf">Join Server <i className='bx bxl-discord-alt'></i></Link>
                  <Link to="/shop">Shop <i class='bx bxs-shopping-bag'></i></Link>
                </span>
              </div>
              <div className={styles.links}>
                <span>Total Members: {serverData.approximate_member_count}</span>
                <span>Discord Partner <img src="https://cdn3.emoji.gg/emojis/4902-partner.png" width="50px" height="50px" alt="Partner"/></span>
                <span>Online Members: {serverData.approximate_presence_count}</span>
              </div>
            </div>
            <div className={styles.landingRight}>
              <img src={skull} alt="skull" />
            </div>
        </div>
    </div>
  );
}

export default Landing;
