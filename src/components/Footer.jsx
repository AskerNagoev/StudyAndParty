import styles from './Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div></div>
            <div className={styles.text}>
                © 2023 ФГБОУ ВО "Пятигорский государственный университет"
            </div>
            <div></div>
        </div>
    )
}

export default Footer;