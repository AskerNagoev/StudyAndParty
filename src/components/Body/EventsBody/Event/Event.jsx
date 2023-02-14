import React from 'react';
import styles from './Event.module.css';
import Photo from './Photo.jpg';

const Event = (props) => {
    return (
        <div className={styles.event}>
            <div className={styles.photo}>
                <img src={Photo}></img>
            </div>
            <div className={styles.info}>
                <div className={styles.info__text}>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                </div>
                <div className={styles.info__buttons}>
                    <div>Подробнее</div>
                    <div>Участвовать</div>
                </div>
            </div>
        </div>
    )
}

export default Event;