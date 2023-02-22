import React from "react";
import Ava from "./Ava.png";
import styles from "./ProfileInfo.module.css";
import Organisation from "./Organisation/Organisation";

const ProfileInfo = (props) => {
    return (
        <div className={styles.top}>
            <div className={styles.bio}>
                <div className={styles.bio__info}>
                    <div className={styles.bio__info__photo}>
                        <img src={Ava} alt="Аватарка"></img>
                    </div>
                    <div className={styles.bio__info__text}>
                        <div>
                            <div>{props.id}</div>
                        </div>
                        <div className={styles.bio__info__text2}>
                            <div>{props.name}</div>
                            <div>{props.surname}</div>
                        </div>
                        <div>
                            <div>{props.institute}</div>
                            <div>{props.group}</div>
                        </div>
                    </div>
                </div>
                <Organisation name='ППОС ПГУ'/>
            </div>
            <div className={styles.calendar}>
                <div>Календарь тут</div>
            </div>
        </div>
    )
}

export default ProfileInfo;