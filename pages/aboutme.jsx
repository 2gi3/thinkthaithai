import styles from '../styles/aboutMe.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const AboutMe = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.hero}> */}
                <div className={styles.heroPicture}>  
                <Image src='/aboutMe1.jpg' width='400px' height='400px' ></Image>                  
                </div>
                <div className={styles.heroTitle}> 
                <h1>สวัสดีคะ Sawatdii ka!</h1>
                <h3>I’m Nattaporn Claycham</h3>
                <p>Professional Thai teacher. </p>                                   
                </div>                
            {/* </div> */}
            {/* <div className={styles.content}> */}
                <div className={styles.contentText}>  
                <h1> Call me Natt </h1>
                <p>
                I’m a Thai and live in Nakhon Pathom, Thailand. I graduated as a computer engineering. 
                I’d worked in an IT company for 8 years and I also love teaching.  I start teaching when I was in university, Math. 
                 Now I have been teaching Thai for more than 4 years.
                </p>
                <p>
                When I was young my dream is to be a teacher. My cousin and I acted to be a teacher and students.
                 I love teaching, sharing, learning, and talk to people.
                  My passion is to help people to reach their goals about Thai language,
                 confidently speaking, and understand Thai culture.
                </p>
                <p>
                I like watching movies, learning languages, surfing on the internet,  traveling and now I’m learning Japanese. 
                Therefore I understand how is difficult to learn a second language but we CAN do it. 
                </p>
                <p>
                Thanks again for stopping by ThinkThaiThai.
                </p>
                <p>
                Let me help you learn Thai!
                </p>
                <p>
                Nattaporn C.
                </p>
                </div>
                <div className={styles.contentPicture}>  
                <Image src='/aboutMe2.jpg' width='400px' height='400px' ></Image>                  
                </div>                
            {/* </div> */}
            <Link href='/#'><button
            // className={isVisible === true ? styles.button : styles.buttonFixed} 
            className={styles.button}
            >Book a &#36;5 trial lesson
          </button></Link>
            
        </div>
    )
}

export default AboutMe