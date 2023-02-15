import React from "react";
import Ava from "./Ava.png";
import styles from "./ProfileInfo.module.css";
import Organisation from "./Organisation/Organisation";

const ProfileInfo = () => {
    return (
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
                <Organisation/>
            </div>
            <div className={styles.top__calendar}>
                <div>Календарь тут</div>
            </div>
        </div>
    )
}

export default ProfileInfo;