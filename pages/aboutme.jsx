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
                <h1>สวัสดีคะ Sawatdii&nbsp;ka!</h1>
                <h3>I’m Nattaporn Claycham</h3>
                <p>Let me help you learn Thai!</p>   
                {/* <Link href='/#'><button
            // className={isVisible === true ? styles.button : styles.buttonFixed} 
            className={styles.button}
            >Book a &#36;5 trial lesson
          </button></Link>                                 */}
                </div>  
                <div className={styles.buttonContainer}>
                <Link href='/#'><button
            // className={isVisible === true ? styles.button : styles.buttonFixed} 
            className={styles.button}
            >&#36;5 trial lesson
          </button></Link>    
          </div>           
            {/* </div> */}
            {/* <div className={styles.content}> */}
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
                <Image src='/aboutMe2.jpg' width='400px' height='400px' ></Image>                  
                </div>                
            {/* </div> */}
            {/* <Link href='/#'><button
            // className={isVisible === true ? styles.button : styles.buttonFixed} 
            className={styles.button}
            >Book a &#36;5 trial lesson
          </button></Link> */}
            
        </div>
    )
}

export default AboutMe