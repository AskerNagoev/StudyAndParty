import React from 'react';
import styles from './Events.module.css';

const Events = () => {
    return (
        <div className={styles.body}>
            <div className={styles.top}>
                <div className={styles.top__search}>
                    Поиск
                </div>
                <div className={styles.top__filters}>
                    Институт
                </div>
            </div>
            <div className={styles.events}>
                Мероприятия
            </div>
        </div>
    )
}

export default Events;