import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a>Главная</a>
                <a>Развлечения</a>
                <a>Творчество</a>
                <a>Наука</a>
                <a>Спорт</a>
                <a>Все</a>
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