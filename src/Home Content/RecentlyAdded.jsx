import React from 'react';
import styles from "./Content.module.css";
import Card from "../Card/Card.jsx";
import contents from "../contentsData.jsx";

function RecentlyAdded() {
    const recentContents = contents.filter((content) => content.type === "show" || content.type === "movie");

    let justifyContentStyle = 'space-between';
    if (recentContents.length < 7) {
        justifyContentStyle = 'flex-start';
    } else {
        recentContents.splice(7);
    }

    return (
        <div className={styles.cardContainer} style={{ justifyContent: justifyContentStyle }}>
            {recentContents.map((content, index) => (
                <Card key={index} title={content.title} />
            ))}
        </div>
    );
}

export default RecentlyAdded;
