import React, {useRef, useState} from "react";
import Ava from "./Ava.png";
import styles from "./ProfileInfo.module.css";
import Organisation from "./Organisation/Organisation";

const ProfileInfo = (props) => {
    const [file, setFile] = useState(null);
    const ref = useRef()

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }
    return (
        <div className={styles.top}>
            <div className={styles.bio}>
                <div className={styles.bio__info}>
                    <div className={styles.bio__info__photo}>
                        <img src={file ? URL.createObjectURL(file) : Ava} alt="Аватарка" onClick={() => ref.current.click()}/>
                        <input type="file" onChange={handleFileChange} ref={ref} />
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