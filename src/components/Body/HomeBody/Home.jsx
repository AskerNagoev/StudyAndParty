import React from "react";
import styles from './HomeBody.module.css'
import middleblock from './middle-block-photo.jpg';
import middlebottom1 from './middle-bottom-first.jpg'
import middlebottom2 from './middle-bottom-second.jpg'
import middlebottom3 from './middle-bottom-third.jpg'
import middlebottom4 from './middle-bottom-fourth.jpg'

const HomeBody = () => {
    return (
        <div className={styles.body}>
            <div className={styles.top}>
                <div className={styles.top__text1}>
                    Хочешь сделать студенческую <br /> жизнь незабываемой?
                </div>
                <div className={styles.top__text2}>
                    Открой афишу мероприятий и выбери то, что тебе по душе!
                </div>
                <div className={styles.top__start}>
                    <a>Начать</a>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.middle__block}>
                    <div></div>
                    <div className={styles.middle__block__text}>
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
                    <div className={styles.middle__block__photo}>
                        <img src={middleblock} alt="Фото с мероприятия"></img>
                    </div>
                    <div></div>
                </div>
                <div className={styles.middle__link}>
                    Посмотреть мероприятия
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom__side}>
                    <img src={middlebottom1} alt="Фото с мероприятия"></img>
                </div>
                <div className={styles.bottom__center}>
                    <img src={middlebottom2} alt="Фото с мероприятия"></img>
                </div>
                <div className={styles.bottom__center}>
                    <img src={middlebottom3} alt="Фото с мероприятия"></img>
                </div>
                <div className={styles.bottom__side}>
                    <img src={middlebottom4} alt="Фото с мероприятия"></img>
                </div>
            </div>
        </div>
    )
}
export default HomeBody;