import React from 'react';
import styles from "./Content.module.css";
import Card from "../Card/Card.jsx";
import contents from "../contentsData.jsx";

function Movies() {
    const movieContents = contents.filter(content => content.type === "movie");

    let justifyContentStyle = 'space-between';
    if (movieContents.length < 7) {
        justifyContentStyle = 'flex-start';
    } else {
        movieContents.splice(7);
    }

    return (
        <div className={styles.cardContainer} style={{ justifyContent: justifyContentStyle }}>
            {movieContents.map((content, index) => (
                <Card key={index} title={content.title} />
            ))}
        </div>
    );
}

export default Movies;
