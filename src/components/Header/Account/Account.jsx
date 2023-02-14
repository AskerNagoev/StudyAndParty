import styles from './Account.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import Ava from './Ava.png'

const Account = () => {
    return (
        <account>
{/*            <div className={styles.log}>
                <a>Войти</a>
                <a>Зарегистрироваться</a>
            </div>*/}
            <div className={styles.name}>
                <NavLink to='/Profile'>Name Surname</NavLink>
                <NavLink to='/Profile'><img src={Ava} alt="Аватарка"></img></NavLink>
            </div>
        </account>
    )
}
export default Account;