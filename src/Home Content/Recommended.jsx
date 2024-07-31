import styles from "./Content.module.css";
import Card from "../Card/Card.jsx"

function Recommended() {
    return (
        <div className={styles.cardContainer}>
            <Card title="naruto" />
            <Card title="the batman" />
            <Card title="the boys" />
            <Card title="interstellar" />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default Recommended;
