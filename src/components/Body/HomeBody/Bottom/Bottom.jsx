import React from "react";
import styles from './Bottom.module.css'
import bottom1 from './middle-bottom-first.jpg'
import bottom2 from './middle-bottom-second.jpg'
import bottom3 from './middle-bottom-third.jpg'
import bottom4 from './middle-bottom-fourth.jpg'


const Bottom = () => {
    return (
            <div className={styles.bottom}>
                <div className={styles.side}>
                    <img src={bottom1} alt="Фото с мероприятия"></img>
                </div>
                <div className={styles.center}>
                    <img src={bottom2} alt="Фото с мероприятия"></img>
                </div>
                <div className={styles.center}>
                    <img src={bottom3} alt="Фото с мероприятия"></img>
                </div>
                <div className={styles.side}>
                    <img src={bottom4} alt="Фото с мероприятия"></img>
                </div>
            </div>
    )
}
export default Bottom;