import React from "react";
import styles from './Profile.module.css'
import Event from "../EventsBody/Event/Event";
import Ava from "./Ava.png"

const Profile = () => {
    return (
        <div className={styles.body}>
            <div className={styles.top}>
                <div className={styles.top__bio}>
                    <div className={styles.top__bio__info}>
                        <div className={styles.top__bio__info__photo}>
                            <img src={Ava} alt="Аватарка"></img>
                        </div>
                        <div className={styles.top__bio__info__text}>
                            <div>
                                <div>594724</div>
                            </div>
                            <div>
                                <div>Имя</div>
                                <div>Фамилия</div>
                            </div>
                            <div>
                                <div>ИНСТИТУТ</div>
                                <div>ГРУППА</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.top__bio__org}>
                        <div>Организация</div>
                    </div>
                    <div className={styles.new}>
                        Создать мероприятие
                    </div>
                </div>
                <div className={styles.top__calendar}>
                    <div>Календарь тут</div>
                </div>
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
export default Profile;