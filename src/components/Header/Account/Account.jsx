import styles from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to='/Home'>Главная</NavLink>
                <NavLink to='/Events'>Развлечения</NavLink>
                <NavLink to='/Events'>Творчество</NavLink>
                <NavLink to='/Events'>Наука</NavLink>
                <NavLink to='/Events'>Спорт</NavLink>
                <NavLink to='/Events'>Все</NavLink>
            </nav>

            <div className={styles.space}></div>

            <div className={styles.log}>
                <a>Войти</a>
                <a>Зарегистрироваться</a>
            </div>
        </header>
    )
}
export default Header;