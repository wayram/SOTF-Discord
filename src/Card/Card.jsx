import React from 'react';
import styles from './Card.module.css';
import contents from '../contentsData.jsx';
import emptyImg from '../assets/MV5BZjdkgsgsgsg.jpg';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const { title } = props;

    const navigate = useNavigate();

    const contentItem = contents.find(item => item.title === title);

    if (!contentItem) {
        return (
            <div className={styles.card}>
                <img src={emptyImg} alt="Content Not Found" />
                <div className={styles.cardTitle}>
                    <h3>Content Not Found</h3>
                </div>
            </div>
        );
    }

    const openCard = () => {
        navigate(`/${contentItem.type}/${contentItem.id}`);
    }    

    return (
        <div className={styles.card} onClick={openCard}>
            <img src={contentItem.cardImage} alt={contentItem.title} />
            <span className={styles.guide}>{contentItem.guide}</span>
            <div className={styles.cardTitle}>
                <h3>{contentItem.title}</h3>
            </div>
            <div className={styles.cardStats}>
                <span>{contentItem.year}</span>
                <span>{contentItem.length}</span>
                <span className={styles.gradientBorder}>{contentItem.type.toUpperCase()}</span>
            </div>
        </div>
    );
}

export default Card;
