import React from 'react';
import styles from './Events.module.css';
import Event from "./Event/Event";

const Events = (props) => {

    let EventsList = props.events.map(event => <Event name={event.name} description={event.description}/>);

    return (
        <div>
            <div className={styles.top}>
                <div className={styles.top__search}>
                    Поиск
                </div>
                <div className={styles.top__filters}>
                    Институт
                </div>
            </div>
            <div className={styles.events}>
                {EventsList}
            </div>
        </div>
    )
}

export default Events;