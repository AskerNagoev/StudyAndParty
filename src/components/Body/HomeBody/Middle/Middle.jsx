import React from "react";
import styles from './Middle.module.css'
import middleBlock from './middle-block-photo.jpg';
import {NavLink} from "react-router-dom";

const Middle = () => {
    return (
            <div className={styles.middle}>
                <div className={styles.block}>
                    <div></div>
                    <div className={styles.block__text}>
                        <div>
                            <h1>С нами ты не пропустишь <br /> ни одно мероприятие</h1>
                            <p>Наша платформа содержит мероприятия по <br />
                                основным направлениям деятельности:<br /> творческие,
                                научные, спортивные и развлекательные.</p>

                            <h1>И ни одно мероприятие <br /> не упустит тебя</h1>
                            <p>У тебя есть возможность принять участие в <br /> самых
                                крутых событиях университета и <br /> сделать свое
                                студенчество ярче.</p>
                        </div>
                    </div>
                    <div className={styles.block__photo}>
                        <img src={middleBlock} alt="Фото с мероприятия"></img>
                    </div>
                    <div></div>
                </div>
                <div className={styles.link}>
                    <NavLink to='/Events'><button>Посмотреть мероприятия</button></NavLink>
                </div>
            </div>
    )
}
export default Middle;