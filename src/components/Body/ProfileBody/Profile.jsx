import React from "react";
import styles from "./Profile.module.css"
import Event from "../EventsBody/Event/Event";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={styles.body}>
            <ProfileInfo/>
            <div >
                <Event name='Языковая реальность в контексте межкультурного стратегического диалога-2022'
                       description='Конференция планируется с целью обмена результатами исследований в русле проводимых
                       научно-образовательным центром кафедры исследований по изучению языковых
                       проблем межкультурного стратегического диалога.'/>
                <Event name='Языковая реальность в контексте межкультурного стратегического диалога-2022'
                       description='Конференция планируется с целью обмена результатами исследований в русле проводимых
                       научно-образовательным центром кафедры исследований по изучению языковых
                       проблем межкультурного стратегического диалога.'/>
            </div>
        </div>
    )
}
export default Profile;