import React, {useMemo, useState} from 'react';
import styles from './Events.module.css';
import Event from "./Event/Event";


const  institutes = [
    {label: "Все", value: 'Все'},
    {label: 'ВШУ', value: 'ВШУ'},
    {label: 'ИРГЯИГТ', value: 'ИРГЯИГТ'},
    {label: 'ИМО', value: 'ИМО'},
    {label: 'ИПРИМ', value: 'ИПРИМ'},
    {label: 'ВШДИА', value: 'ВШДИА'},
    {label: 'ЮИ', value: 'ЮИ'},
    {label: 'ИИЯМТ', value: 'ИИЯМТ'},
]


const Events = (props) => {
    const [filter, setFilter] = useState( 'Все')


    const events = useMemo(() => {
        return filter === 'Все' ? props.events : props.events.filter(event => event.organizer === filter)
    },[filter, props])

    return (
        <div>
            <div className={styles.top}>
                <div className={styles.top__search}>
                    <input className={styles.search__input} placeholder='Поиск по мероприятиям'/>
                    <button className={styles.search__button}>Поиск</button>
                    <select className={styles.search__select} value={filter} onChange={(e) => setFilter(e.currentTarget.value) }>
                        {institutes.map(institute => <option className={styles.select__option} value={institute.value}>{institute.label}</option>)}
                    </select>
                </div>
            </div>
            <div className={styles.events}>
                {events.length > 0 ? events.map(event =>  <Event key={event.id} name={event.name} description={event.description}/>) :
                    <div className={styles.empty_screen}>Извините, но мероприятий от {filter} еще не существует!</div>
                }
            </div>
        </div>
    )
}

export default Events;