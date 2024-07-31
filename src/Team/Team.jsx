import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Team.module.css";

function Team() {
    const [teamData, setTeamData] = useState([]);

    const teamIds = ["723922661570248756", "479992601278414848"];

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    teamIds.map(id => fetch(`https://api.lanyard.rest/v1/users/${id}`))
                );
                const data = await Promise.all(responses.map(res => res.json()));
                setTeamData(data.map(item => item.data || {}));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    const onlineStatus = {
        backgroundColor: "#10b981",
        boxShadow: "0px 0px 7px #10b981",
    };

    const offlineStatus = {
        backgroundColor: "rgb(70, 70, 70)",
    };

    const getStatusClass = (status) => {
        return status === "online" ? onlineStatus : offlineStatus;
    };

    const teamAbout = (userName) => {
        navigate(`/team/${userName}`);
    };

    return (
        <div className={styles.teamContainer}>
            {teamData.map((data, index) => {
                const discordUser = data.discord_user || {};
                const profilePicture = discordUser.avatar
                    ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.${discordUser.avatar.startsWith('a_') ? 'gif' : 'png'}`
                    : 'https://cdn.discordapp.com/embed/avatars/0.png';

                const userName = discordUser.global_name || 'Unknown User';
                const userStatus = data.discord_status || 'offline';

                return (
                    <div key={index} className={styles.teamMember} onClick={() => teamAbout(userName)}>
                        <span className={styles.imageContainer}>
                            <img src={profilePicture} alt="Profile Picture" />
                        </span>
                        <span className={styles.teamContent}>
                            <span className={styles.memberText}>
                                <h1>{userName}</h1>
                                <p>Developer</p>
                            </span>
                            <div className={styles.activity} style={getStatusClass(userStatus)}></div>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default Team;
