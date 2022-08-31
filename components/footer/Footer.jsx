import styles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
            <ul>
                <li> contacts</li>
                <li>FAQ</li>
            </ul>
            </div>
            <div className={styles.copyRights}>
            <p className={styles.copyRightsBy}>Website by:<a> Giuseppe Ippolito.</a></p>
            <p className={styles.copyRightsYear}>&copy; 2022 All right reserved</p>
            </div>
        </footer>

    )
}

export default Footer