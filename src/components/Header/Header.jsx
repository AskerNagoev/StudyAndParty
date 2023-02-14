import styles from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import Account from "./Account/Account";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to='/Home' className={navData=>navData.isActive? styles.activeLink: styles}>Главная</NavLink>
                <NavLink to='/Entertainment' className={navData=>navData.isActive? styles.activeLink: styles}>Развлечения</NavLink>
                <NavLink to='/Creation' className={navData=>navData.isActive? styles.activeLink: styles}>Творчество</NavLink>
                <NavLink to='/Science' className={navData=>navData.isActive? styles.activeLink: styles}>Наука</NavLink>
                <NavLink to='/Sport' className={navData=>navData.isActive? styles.activeLink: styles}>Спорт</NavLink>
                <NavLink to='/Events' className={navData=>navData.isActive? styles.activeLink: styles}>Все</NavLink>
            </nav>

            <div className={styles.space}></div>

            <div className={styles.log}>
               <Account/>
            </div>
        </header>
    )
}
export default Header;