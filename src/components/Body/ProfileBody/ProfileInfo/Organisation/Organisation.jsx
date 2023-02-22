import React from "react";
import styles from "./Organisation.module.css";

const Organisation = (props) => {
    return (
        <div className={styles.org}>
            <div className={styles.org__name}>
                <div>{props.name}</div>
            </div>
            <div className={styles.new}>
                <button>Создать мероприятие</button>
            </div>
        </div>
    )
}

export default Organisation;