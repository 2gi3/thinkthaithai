import Contacts from "../contacts/Contacts";
import styles from "./footer.module.scss";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Contacts />
            <div className={styles.copyRights}>
                <p className={styles.copyRightsBy}>Website by:<a> Giuseppe Ippolito.</a></p>
                <p className={styles.copyRightsYear}>&copy; 2022 All right reserved</p>
            </div>
        </footer>

    )
}

export default Footer