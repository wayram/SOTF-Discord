import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import styles from "./MovieWindow.module.css";
import contents from '../contentsData.jsx';
import VideoPlayer from "./VideoPlayer.jsx"

function MovieWindow() {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [animation, setAnimation] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const animationTimeout = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 60000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentMovieIndex]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAnimation(styles.slideOutToLeft);
        animationTimeout.current = setTimeout(() => {
            setCurrentMovieIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % contents.length;
                return nextIndex > 3 ? 0 : nextIndex;
            });
            setAnimation(styles.slideInFromRight);
            setIsAnimating(false);
        }, 300);
    };
    
    const handlePrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setAnimation(styles.slideOutToRight);
        animationTimeout.current = setTimeout(() => {
            setCurrentMovieIndex((prevIndex) => {
                const prevIndexMod = (prevIndex - 1 + contents.length) % contents.length;
                return prevIndexMod > 3 ? 3 : prevIndexMod;
            });
            setAnimation(styles.slideInFromLeft);
            setIsAnimating(false);
        }, 300);
    };

    const handleProgressClick = (index) => {
        if (isAnimating || index === currentMovieIndex) return;
        setIsAnimating(true);
        setAnimation(index > currentMovieIndex ? styles.slideOutToLeft : styles.slideOutToRight);
        animationTimeout.current = setTimeout(() => {
            setCurrentMovieIndex(index);
            setAnimation(index > currentMovieIndex ? styles.slideInFromRight : styles.slideInFromLeft);
            setIsAnimating(false);
        }, 300);
    };

    const currentMovie = contents[currentMovieIndex];

    const path = `/${currentMovie.type}/${currentMovie.id}`;

    return (
        <div className={styles.movieWindow}>
            <div className={styles.overlay}></div>
            <div className={styles.movieInfoContainer}>
                <button className={styles.arrowButton} onClick={handlePrevious} disabled={isAnimating}><i className='bx bx-left-arrow-alt'></i></button>
                <div className={`${styles.movieInfo} ${animation}`}>
                    <h1>{currentMovie.title}</h1>
                    <div className={styles.movieInfoStats}>
                        <span className={styles.gradientBorder}>{currentMovie.definition}</span>
                        <span>{currentMovie.guide}</span>
                        <span><i className='bx bxs-star'></i> {currentMovie.rating}</span>
                        <span>{currentMovie.year}</span>
                        {currentMovie.genres.map((genre) => (
                            <span key={genre}>{genre}</span>
                        ))}
                    </div>
                    <p>{currentMovie.description}</p>
                    <div className={styles.buttonInfo}>
                        <Link to={path}>More Info</Link>
                    </div>
                </div>
                <div className={styles.progressBar}>
                    {[0, 1, 2, 3].map(index => (
                        <span
                            key={index}
                            className={index === currentMovieIndex ? styles.active : ''}
                            onClick={() => handleProgressClick(index)}
                        ></span>
                    ))}
                </div>
                <h2 className={styles.movieWindowText}>Recently Added</h2>
                <button className={styles.arrowButton} onClick={handleNext} disabled={isAnimating}><i className='bx bx-right-arrow-alt'></i></button>
            </div>
            <div className={`${styles.movieBackground} ${animation}`}>
                <img src={currentMovie.image} alt="Background" />
                <VideoPlayer ytId={currentMovie.ytId} title={currentMovie.title} />
            </div>
        </div>
    );
}

export default MovieWindow;
