import React from "react";
import styles from './ProfileBody.module.css'
import Event from "../EventsBody/Event/Event";
import Ava from "./Ava.png"

const ProfileBody = () => {
    return (
        <div className={styles.body}>
            <div className={styles.top}>
                <div className={styles.top__bio}>
                    <div className={styles.top__bio__info}>
                        <div className={styles.top__bio__info__photo}>
                            <img src={Ava} alt="Аватарка"></img>
                        </div>
                        <div className={styles.top__bio__info__text}>
                            <div>594724</div>
                            <div>Имя</div>
                            <div>Фамилия</div>
                            <div>ИРГЯИГТ</div>
                            <div>Группа</div>
                        </div>
                    </div>
                    <div className={styles.top__bio__org}>
                        Organisation
                    </div>
                </div>
                <div>
                    Calendar
                </div>
            </div>
            <div className={styles.new}>
                Создать мероприятие
            </div>
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
export default ProfileBody;