import React from 'react';
import styles from "./Content.module.css";
import Card from "../Card/Card.jsx";
import contents from "../contentsData.jsx";

function Shows() {
    const showContents = contents.filter(content => content.type === "show");

    let justifyContentStyle = 'space-between';
    if (showContents.length < 7) {
        justifyContentStyle = 'flex-start';
    } else {
        showContents.splice(7);
    }

    return (
        <div className={styles.cardContainer} style={{ justifyContent: justifyContentStyle }}>
            {showContents.map((content, index) => (
                <Card key={index} title={content.title} />
            ))}
        </div>
    );
}

export default Shows;
