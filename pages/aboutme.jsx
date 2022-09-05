import styles from '../styles/aboutMe.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'



const AboutMe = () => {
    return (
        <div className={styles.container}>
            <Head>
        <title>ThinkThaiThai</title>
        <meta name="description" content="Learn thai test" />
        {/* <meta property="og:image" content="/1.png" /> */}
        <meta property="og:url" content="https://thinkthaithai.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Learn Thai language!"
        />

        <meta
          property="og:description"
          content="Explore the learning material and book a trial lesson"
        />

        <meta
          property="og:image"
          content={"https://thinkthaithai.vercel.app/1.png"}
        />

        <link rel="icon" href="/logo.webp" />
      </Head>
            <div className={styles.heroPicture}>
                <Image src='/aboutMe1.jpg' width='400px' height='400px' alt='A picture of teacher Nat' ></Image>
            </div>
            <div className={styles.heroTitle}>
                <h1>สวัสดีค่ะ Sawatdii&nbsp;ka!</h1>
                <h3>I’m Nattaporn Claycham</h3>
                <p>Let me help you learn Thai!</p>
            </div>
            <div className={styles.buttonContainer}>
            <Link href='https://www.paypal.com/webapps/hermes?token=2LP71852KR243514U&useraction=commit&mfid=1661951713535_f7632277b2f02'>
                <button
                    className={styles.button}
                >trial lesson
                </button></Link>
            </div>
            <div className={styles.contentText}>
                <h3> Call me Natt </h3>
                <p> I live in Nakhon Pathom, Thailand. I graduated in computer engineering.
                    I’ve worked in an IT company for 8 years and I also love teaching.  I started teaching Math when I was at the university.
                    Now I have been teaching Thai for more than 5 years.
                </p>
                <p> 
                    When I was young my dream was to become a teacher. My cousin and I used to play to be a teacher and students.
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