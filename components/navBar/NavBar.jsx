import Link from 'next/link'
import Image from 'next/image'
import styles from './navBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



const NavBar = () => {
    const [toggle__button, setToggle__button] = useState('closed')
    const [toggleButtonIcon, setToggleButtonIcon] = useState(faBars)
    const router = useRouter()
    let URI = router.pathname

    useEffect(() => {
        setToggle__button('closed')

        console.log(URI);

    }, [URI])

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
                } className={toggle__button === 'closed' ? styles.toggleButtonClosed : styles.toggleButtonOpened}><FontAwesomeIcon icon={toggleButtonIcon} />
                </button>
                <div className={styles.links}>
                    <Link href='/'><a className={URI === "/home"?styles.linkSelected: null }><p>Home</p></a></Link>
                    <Link href='/aboutme'><a className={URI === "/aboutme"?styles.linkSelected: null }><p>About Me</p></a></Link>
                    <Link href='/feedbacks'><a className={URI === "/feedbacks"?styles.linkSelected: null }><p>Feedbacks</p></a></Link>
                    <Link href='/pricing'><a className={URI === "/pricing"?styles.linkSelected: null }><p>Pricing</p></a></Link>
                    <Link href='/myblog'><a className={URI === "/myblog"?styles.linkSelected: null }><p>My blog</p></a></Link>
                </div>
            </nav>
        </div>

    )
}

export default NavBar