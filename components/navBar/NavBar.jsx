import Link from 'next/link'
import Image from 'next/image'
import styles from './navBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const NavBar = () => {
    const [toggle__button, setToggle__button] = useState('toggle__button--closed')
    const [toggleButtonIcon, setToggleButtonIcon] = useState(faBars)
    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <Image src='/logo.webp' width='180' height='90' />
            </div>
            <nav className={styles.nav}>
                <button onClick={() => {
                    if (toggle__button === 'toggle__button--closed') {
                        setToggle__button('toggle__button--opened');
                        setToggleButtonIcon(faXmark)
                    } else {
                        setToggle__button('toggle__button--closed')
                        setToggleButtonIcon(faBars)
                    }
                }
                } className={toggle__button}><FontAwesomeIcon icon={toggleButtonIcon} />
                </button>
                <div className='links'>
                    <Link href='/'><a><p>Home</p></a></Link>
                    <Link href='/about'><a><p>About Me</p></a></Link>
                    <Link href='/students'><a><p>My students</p></a></Link>
                    <Link href='#'><a><p>My blog</p></a></Link>
                </div>
            </nav>
        </div>

    )
}

export default NavBar