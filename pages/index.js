import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ThinkThaiThai</title>
        <meta name="description" content="Learn thai" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className={styles.background}>
        <Image src='/homepageBg.jpg' width='400px' height='400px' ></Image>
      </div>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.logo}>
            <Image src='/logo.webp' width='180' height='90' />
          </div>
          <ul className={styles.features}>
            <li className={styles.list}>One on one Thai lessons</li>
            <li className={styles.list}>Custom-tailored experience</li>
            <li className={styles.list}>learning materials included</li>
          </ul>
          <Link href='/#'><button className={styles.button} >Book a free trial lesson</button></Link>
        </div>
        <div className={styles.imageContainer}>
          {/* <div className={styles.imageBigContainer}>
            <div className={styles.imageBig}>
              <Image className={styles.image} src='/phone.png' width='100' height='100' />
            </div>
            <div className={styles.imageBig}>
              <Image className={styles.image} src='/computer.png' width='100' height='100' />
            </div>
            <div className={styles.imageBig}>
              <Image className={styles.image} src='/tablet.png' width='120' height='100' />
            </div>
          </div> */}
          {/* <div className={styles.imageSmallContainer}>
            <div className={styles.imageSmall}>
              <Image src='/ipod.png' width='50' height='50' />
            </div>
            <div className={styles.imageSmall}> 
              <Image src='/ear.png' width='50' height='50' />
            </div>
            <div className={styles.imageSmall}>
              <Image src='/listen.png' width='50' height='50' />
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.coursesContainer}>
        <div className={styles.message}>
          <h1>Welcome to learn </h1>
          <h2>with ThinkThaiThai</h2>
          <p>
            ONE TO ONE THAI LESSONS ONLINE. THINKTHAITHAI HELPS YOU TO BECOME A CONFIDENT THAI SPEAKER,
            LET YOU UNDERSTAND THAI CULTURE AND WATCH THAI DRAMA EASILY. THINKTHAITHAI WILL MAKE LESSONS SUITABLE FOR YOU.
          </p>
        </div>
        <div className={styles.courses}>
          <div className={styles.skills}>
            <div className={styles.SpeakingAndListening}>
              <h3>Gain the confidence to engage in daily conversations</h3>
              <div className={styles.course}>
                <h3>Speaking</h3>
              </div>
              <div className={styles.course}>
                <h3>Listening</h3>
              </div>
            </div>
            <div className={styles.writingAndReading}>
              <h3>Explore thai social media, chats and literature</h3>
              <div className={styles.course}>
                <h3>Reading</h3>
              </div>
              <div className={styles.course}>
                <h3>Writing</h3>
              </div>
            </div>
          </div>
          <div className={styles.needs}>
            <h3>Learning paths highly flexible and adapted to your specific needs </h3>
            <div className={styles.course}>Holiday</div>
            <div className={styles.course}>Business</div>
            <div className={styles.course}>Family</div>
          </div>
        </div>
      </div>
      <div className={styles.peopleContainer}>
        <div className={styles.teacher}>
          <div className={styles.teacherVideo}>
            <h3> Know your teacher and learning style</h3>
            <iframe src="https://www.youtube.com/embed/OfwbcqTyg3o?autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;mute=1&amp;autoplay=1"
              allowfullscreen="" frameborder="0">
            </iframe>
          </div>
          <div className={styles.teacerClassesVideos}>
            <h3>Some examples of my classes</h3>
            <div className={styles.classVideo}>
              <h3>Speaking</h3>
              <iframe src="https://www.youtube.com/embed/JWA5qHp6EGQ?autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;autoplay=1"
                allowfullscreen="" frameborder="0">
              </iframe>
            </div>
            <div className={styles.classVideo}>
              <h3>Writing</h3>
              <iframe src="https://www.youtube.com/embed/QnZ5BUiaZXM?autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;autoplay=1"
                allowfullscreen="" frameborder="0">
              </iframe>
            </div>
            <div className={styles.classVideo}>
              <h3>Conversation</h3>
              <iframe src="https://www.youtube.com/embed/A9-zNVOc47Y?autohide=1&amp;border=0&amp;wmode=opaque&amp;enablejsapi=1&amp;autoplay=1"
                allowfullscreen="" frameborder="0">
              </iframe>
            </div>
          </div>
        </div>
        <div className={styles.students}>
          <h3> What my students say abuot me</h3>
          <div className={styles.feedback}>
            <div className={styles.feedbackPicture}>

            </div>
            <div className={styles.feedbackText}>
            <p>Elit laborum labore esse fugiat enim laborum tempor id adipisicing velit nulla eu cupidatat magna. Deserunt ut ad commodo mollit fugiat deserunt elit. Et mollit pariatur mollit consequat et eiusmod non. Exercitation labore incididunt non id cillum voluptate dolor sit sunt consectetur minim exercitation. Exercitation adipisicing adipisicing duis deserunt commodo qui in nostrud. Exercitation nisi mollit elit ut excepteur adipisicing nulla exercitation minim exercitation. Tempor anim eu pariatur esse elit est sit magna pariatur pariatur.</p>
            </div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackPicture}>

            </div>
            <div className={styles.feedbackText}>
            <p>Elit laborum labore esse fugiat enim laborum tempor id adipisicing velit nulla eu cupidatat magna. Deserunt ut ad commodo mollit fugiat deserunt elit. Et mollit pariatur mollit consequat et eiusmod non. Exercitation labore incididunt non id cillum voluptate dolor sit sunt consectetur minim exercitation. Exercitation adipisicing adipisicing duis deserunt commodo qui in nostrud. Exercitation nisi mollit elit ut excepteur adipisicing nulla exercitation minim exercitation. Tempor anim eu pariatur esse elit est sit magna pariatur pariatur.</p>            
            </div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackPicture}>

            </div>
            <div className={styles.feedbackText}>
            <p>Elit laborum labore esse fugiat enim laborum tempor id adipisicing velit nulla eu cupidatat magna. Deserunt ut ad commodo mollit fugiat deserunt elit. Et mollit pariatur mollit consequat et eiusmod non. Exercitation labore incididunt non id cillum voluptate dolor sit sunt consectetur minim exercitation. Exercitation adipisicing adipisicing duis deserunt commodo qui in nostrud. Exercitation nisi mollit elit ut excepteur adipisicing nulla exercitation minim exercitation. Tempor anim eu pariatur esse elit est sit magna pariatur pariatur.</p>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
