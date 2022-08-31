import styles from '../styles/aboutMe.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heroPicture}>
                <Image src='/aboutMe1.jpg' width='400px' height='400px' alt='A picture of teacher Nat' ></Image>
            </div>
            <div className={styles.heroTitle}>
                <h1>สวัสดีค่ะ Sawatdii&nbsp;ka!</h1>
                <h3>I’m Nattaporn Claycham</h3>
                <p>Let me help you learn Thai!</p>
            </div>
            <div className={styles.buttonContainer}>
            <Link href='https://www.paypal.com/webapps/hermes?token=11136720N04936738&useraction=commit&mfid=1661912995235_f28691568b858'>
                <button
                    className={styles.button}
                >&#36;5 trial lesson
                </button></Link>
            </div>
            <div className={styles.contentText}>
                <h3> Call me Natt </h3>
                <p> I live in Nakhon Pathom, Thailand. I graduated in computer engineering.
                    I’ve worked in an IT company for 8 years and I also love teaching.  I started teaching Math when I was at the university.
                    Now I have been teaching Thai for more than 4 years.
                </p>
                <p> 
                    When I was young my dream was to be a teacher. My cousin and I acted to be a teacher and students.
                    I love teaching, sharing, learning, and talking to people.
                    My passion is to help people to reach their goals about Thai language,
                    confidently speaking, and understanding Thai culture.
                </p>
                <p>
                    I like watching movies, learning languages, surfing on the internet,  traveling and now I’m learning Japanese.
                    Therefore I understand how difficult it is to learn a second language, but <b>TOGETHER</b> we can do it.
                </p>
                <p>
                    Thanks again for stopping by.
                </p>
                <p>
                    Nattaporn C.
                </p>
            </div>
            <div className={styles.contentPicture}>
                <Image src='/aboutMe2.jpg' width='400px' height='400px' alt='A picture of teacher Nat'></Image>
            </div>
        </div>
    )
}

export default AboutMe