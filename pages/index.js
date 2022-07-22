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
          <h1>Speak Thai confidently</h1>
          {/* <h2>with ThinkThaiThai</h2> */}
          <p>
            With a personalised study plan, tailored learning materials, 
            and flexible teaching techniques that adapt to your own learning style
          </p>
        </div>
        <div className={styles.courses}>
          <div className={styles.skills}>
            <div className={styles.SpeakingAndListening}>
            <h3>Speaking and listening</h3>
              <div className={styles.course}>
                <p>Simulate <strong>real life situations</strong> with your teacher.</p>
                {/* <p>Pronounciation accuracy</p>  */}
                <p> Watch <strong> Thai drama</strong> </p>
                <p> learn your favourite <strong>songs</strong></p>
                <p> and listen to <strong> podcasts</strong></p>                              
              </div>
              <h3>Gain the confidence to engage in daily conversations</h3> 
              {/* <div className={styles.course}>
                <h3>Listening</h3>
                <p> Thai drama</p>
                <p> Thai songs</p>
                <p>podcasts</p>
              </div> */}
            </div>
            <div className={styles.writingAndReading}>
              <h3>Reading and writing</h3>
              <div className={styles.course}>
                {/* <h3>Reading</h3> */}
                <p> Learn the <strong>Thai alphabet and grammar</strong>, </p>
                <p> Understand and practice Thai tones and reading accuracy </p>
                {/* <p> reading accuracy </p> */}
                <p> learn from official Thai primary school books</p>
              </div>
              <h3>All you need to explore thai social media, chats, news and literature</h3>
              {/* <div className={styles.course}>
                <h3>Writing</h3>
                <p>Grammar rules</p>
                <p> spelling</p>
                <p>
                  Vocabulary</p>
                  <p> sentence structure.
                </p>
              </div> */}
            </div>
          </div>
          <div className={styles.needs}>
            <h3>Prioritise the vocabulary most relevant to your own life  </h3>
            <p>Holiday</p>
            <p>Business</p>
            <p>Family</p>
          </div>
        </div>
      </div>
      <div className={styles.peopleContainer}>
        <div className={styles.teacher}>
          <div className={styles.teacherVideo}>
            <h3> Know your teacher and learning style</h3>
            <video src="/videos/teacherIntroduction.mp4" controls height='150' width='225'
              loading="lazy" allowfullscreen="" frameborder="0">
            </video>
          </div>
          <div className={styles.teacerClassesVideos}>
            <h3>Some examples of my classes</h3>
            <div className={styles.classVideo}>
              <h3>Speaking</h3>
              <video src="/videos/speaking.mp4" controls type="video/mp4" height='100' width='150'
                loading="lazy" allowfullscreen="" frameborder="0">
              </video>
            </div>
            <div className={styles.classVideo}>
              <h3>Writing</h3>
              <video src="/videos/reading.mp4" controls height='100' width='150'
                loading="lazy" allowfullscreen="" frameborder="0">
              </video>
            </div>
            <div className={styles.classVideo}>
              <h3>Conversation</h3>
              <video src="/videos/conversation2.mp4" controls height='100' width='150'
                loading="lazy" allowfullscreen="" frameborder="0">
              </video>
            </div>
          </div>
        </div>
        <div className={styles.students}>
          <h3> What my students say abuot me</h3>
          <div className={styles.feedback}>
            <div className={styles.feedbackPicture}>
              <Image src='/students/Shannen Li_HK.png' width='100' height='100' />
            </div>
            <div className={styles.feedbackText}>
              <h3 className={styles.feedbackHeader}>So Much Fun</h3>
              <p className={styles.feedbackBody}>"Kap khoon ka! Thank you Natt, I had so much fun! Your lesson structure was very neat and useful,
                and it was very relevant! I feel like I’m ready to visit Thailand now! 😍"
              </p>
              <p className={styles.feedbackFooter}>
                Shanen Li Student, Hong Kong
              </p>
            </div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackPicture}>
              <Image src='/students/saru.png' width='100' height='100' />
            </div>
            <div className={styles.feedbackText}>
              <h3 className={styles.feedbackHeader}>I totally recommend her lessons</h3>
              <p className={styles.feedbackBody}>Great lesson! Natt’s class was very cozy and relaxed, she is so friendly and
                easy to talk to, but she also prepared really nice materials with a clear and systematic structure,
                that covered vocabulary, expressions and dialogues. Also, she sent me the pronunciation for me to practice
                and gave me meaningful homework. During the lesson we practiced pronunciation, talked about the uses,
                and she let me build my own examples. I totally recommend her lessons!
              </p>
              <p className={styles.feedbackFooter}>
                Saru Salvador, Spanish Teacher, Germany
              </p>
            </div>
          </div>
          <div className={styles.feedback}>
            <div className={styles.feedbackPicture}>
              <Image className={styles.feedbackPicture} src='/students/Emily_.jpg' width='100' height='100' />
            </div>
            <div className={styles.feedbackText}>
              <h3 className={styles.feedbackHeader}>Very kind teacher</h3>
              <p className={styles.feedbackBody}>Natt is a very kind teacher who taught me pronunciation practice patiently.
                Let me to improve after each class. Before teaching a new vowel, Natt would help me review what I had
                learned to strengthen my memory. Thanks, teacher Natt.
              </p>
              <p className={styles.feedbackFooter}>
                Emily Huang Accountant , Taiwan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testPricingContainer}>
        <div>
          <h3>
            Book your &#36;5 taster lesson or buy a bundle of lessons from starting from &#36;15/hour!
          </h3>
        </div>
        <p className={styles.priceContainerFooter}>Learning materials, homeworks and exercices always included </p>
      </div>
      {/* <div className={styles.pricingContainer}>
          <div><p>5 Lessons</p></div>
          <div><p>&#36;100</p></div>
          <div><p>&#36;20/lesson</p></div>
          <div><p>10 Lessond</p></div>
          <div><p>&#36;180</p></div>
          <div><p>&#36;18/lesson</p></div>
          <div><p>15 Lessons</p></div>
          <div><p>&#36;300</p></div>
          <div><p>&#36;15/lesson</p></div>        
        <p className={styles.priceContainerFooter}>Learning materials, homeworks and exercices always included </p>
      </div> */}
    </>
  )
}
