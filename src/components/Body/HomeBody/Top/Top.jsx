import React from "react";
import styles from './Top.module.css'
import {NavLink} from "react-router-dom";

const Top = () => {
    return (
        <div className={styles.top}>
            <div className={styles.text1}>
                Хочешь сделать студенческую <br /> жизнь незабываемой?
            </div>
            <div className={styles.text2}>
                Открой афишу мероприятий и выбери то, что тебе по душе!
            </div>
            <div className={styles.start}>
                <NavLink to='/Events'><button>Начать</button></NavLink>
            </div>
        </div>
    )
}
export default Top;