import styles from "./footer.module.scss"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <div className={styles.footerContacts}>
                <ul>
                    <li>
                        <Link href='https://www.instagram.com/thaiwithnatt'>
                           <a><img src="/logo-ig-png-32461-64x64.ico" width="60px" height="60px"  alt="Instagram" /></a>
                        </Link>
                    </li>
                    <li>                      	
                       <a href="mailto:nattaporn.cl@gmail.com?subject=Message_From_ThinkThaiThai">
                          <img src="/emailIcon.png" width="" height="50" alt="Email" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+66924496600">
                          <img src="/WhatsApp.webp" width="50px" height="" alt="WhatsApp" />
                        </a>
                   </li>
                </ul>
                </div>
                {/* <div className={styles.FAQ}>
                    <p>FAQ</p>
                </div> */}
            </div>
            <div className={styles.copyRights}>
                <p className={styles.copyRightsBy}>Website by:<a> Giuseppe Ippolito.</a></p>
                <p className={styles.copyRightsYear}>&copy; 2022 All right reserved</p>
            </div>
        </footer>

    )
}

export default Footer