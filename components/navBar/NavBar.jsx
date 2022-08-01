import Link from 'next/link'
import Image from 'next/image'
import styles from './navBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const NavBar = () => {
    const [toggle__button, setToggle__button] = useState('closed')
    const [toggleButtonIcon, setToggleButtonIcon] = useState(faBars)
    
    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                {/* <Image src='/logo.webp' width='180' height='90' /> */}
                <h1>ThinkThaiThai</h1>
            </div>
            <nav className={styles.nav}>
                <button onClick={() => {
                    if (toggle__button === 'closed') {
                        setToggle__button('opened');
                        setToggleButtonIcon(faXmark)
                    } else {
                        setToggle__button('closed')
                        setToggleButtonIcon(faBars)
                    }
                }
                } className={toggle__button==='closed'? styles.toggleButtonClosed : styles.toggleButtonOpened }><FontAwesomeIcon icon={toggleButtonIcon} />
                </button>
                <div className={styles.links}>
                    <Link href='/'><a><p>Home</p></a></Link>
                    <Link href='/aboutme'><a><p>About Me</p></a></Link>
                    <Link href='/feedbacks'><a><p>Feedbacks</p></a></Link>
                    <Link href='/pricing'><a><p>Pricing</p></a></Link>
                    <Link href='/myblog'><a><p>My blog</p></a></Link>
                </div>
            </nav>
        </div>

    )
}

export default NavBar