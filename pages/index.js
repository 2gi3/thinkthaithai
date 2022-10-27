import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navBar/NavBar'
import styles from '../styles/Home.module.scss'
import { useState, useRef, useMemo, useEffect } from 'react'
import Contacts from '../components/contacts/Contacts'
import useToggle from '../functions/useToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const getStaticProps = async () => {
  const res = await fetch('https://www.thinkthaithai.com/api/feedbacks',
    {
      method: 'GET',
      headers: {
        // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOiI2MzE5N2JlMjk2NGIwN2I2ODkwYTQ0ZjciLCJpYXQiOjE2NjI2MTQ1MzEsImV4cCI6MTY2MjcwMDkzMX0.71pv30-6bcG8xvYT8U3azxSrYeDkKyjAieUR0SjNlCA"
      }
    }
  );
  const rawData = await res.json();
  const data = rawData.data
  console.log(data)

  return { props: { data } }
}

export default function Home({ data }) {
  const [value, toggleValue] = useToggle(false)

  // --Start-- Function and options object to pass in the intersectionObserver inside useEffect
  const [isVisible, setIsVisible] = useState(true)
  const targetRef = useRef(null)

  const callbackFunction = entries => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting)
    console.log(entry.isIntersecting)
  }
  const options = useMemo(() => {
    return (
      {
        root: null,
        threshold: 0,
        rootMargin: '100px 0px 0px 0px'
      }
    )
  }, []);
  // --End-- Function and options object to pass in the intersectionObserver inside useEffect


  useEffect(() => {

    // --Start-- detect when the button ("book a $5 trial lesson") is outside of the viewport
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.observe(currentTarget);
    }
    // --End-- detect when the button ("book a $5 trial lesson") is outside of the viewport
  }, [targetRef, options])

  return (
    <>
      <Head>
        <title>ThinkThaiThai</title>
        <meta name="description" content="Learn thai test" />
        {/* <meta property="og:image" content="/1.png" /> */}
        <meta property="og:url" content="https://www.thikthaithai.com/" />
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
          content={"https://www.thikthaithai.com/1.png"}
        />

        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className={styles.backgroundMobile}>
        <Image src='/natMobile.webp' width='557px' height='615' alt='teacher nat'></Image>
      </div>
      <div className={styles.background}>
        <Image src='/nat2.jpg' width='448px' height='597' alt='teacher nat'></Image>
      </div>
      <div ref={targetRef} className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.logo}>
            <h1>ThinkThaiThai</h1>
          </div>
          <ul className={styles.features}>
            <li className={styles.list}>One on one Thai lessons</li>
            <li className={styles.list}>Custom-tailored experience</li>
            <li className={styles.list}>learning materials included</li>
          </ul>
          {/* Toggle the button's class according to whether or not the button is visible in the viewport  */}
          {/* <Link href='https://www.paypal.com/webapps/hermes?token=2LP71852KR243514U&useraction=commit&mfid=1661951713535_f7632277b2f02'> */}
          <Link href='/pricing'>
            <button
              className={isVisible === true ? styles.button : styles.buttonFixed} > trial lesson
            </button>
          </Link>
        </div>
        <div className={styles.imageContainer}>
        </div>
      </div>
      <div className={styles.coursesContainer}>
        <div className={styles.message}>
          <h1>Speak Thai confidently</h1>
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
                <p> Watch <strong> Thai drama</strong> </p>
                <p> learn your favourite <strong>songs</strong></p>
                <p> and listen to <strong> podcasts</strong></p>
              </div>
              <h3>Gain the confidence to engage in daily conversations</h3>
            </div>
            <div className={styles.writingAndReading}>
              <h3>Reading and writing</h3>
              <div className={styles.course}>
                <p> Learn the <strong>Thai alphabet and grammar</strong>, </p>
                <p> Understand and practice Thai tones and reading accuracy </p>
                <p> learn from official Thai primary school books</p>
              </div>
              <h3>All you need to explore thai social media, chats, news and literature</h3>
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
        <h3 className={styles.teacherTitle}> Know your teacher </h3>
        <div className={styles.teacher}>

          <div className={styles.teacherVideo}>
            <iframe src="https://drive.google.com/file/d/18T5UaTOLQulNkiT2GNw-hCTa8HxAeise/preview"
              width="274" height="205" loading="lazy">
            </iframe>
            <div className={styles.teacherIntroduction}>
              <p>
                In my 5 years of experience teaching Thai language, I have helped hundreds of students achieve their goals!
              </p>
              <Link href='/aboutme'><a> Find out more <span>About Me</span></a></Link>
              <p>
                And feel free to
                <button onClick={() => {
                  value === true ? toggleValue(false) : toggleValue(true);
                }}>
                  contact me
                </button>
                if you have any question.
              </p>
              <div className={value === false ? styles.contactsOff : styles.contactsOn}>
                <button onClick={() => {
                  value === true ? toggleValue(false) : toggleValue(true);
                }}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <Contacts />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.students}>
          <h3 className={styles.studentsTitle}> What my students say about me </h3>
          {data.map((feedback, index) =>
            index < 3 ?
              <div key={feedback._id} className={styles.feedback}>
                <div className={styles.feedbackPicture}>
                  <Image src={feedback.imageUrl} width='100' height='100' alt='a student' />
                </div>
                <div className={styles.feedbackText}>
                  <h3 className={styles.feedbackHeader}>{feedback.feedbackTitle}</h3>
                  <p className={styles.feedbackBody}>
                    {feedback.content}
                  </p>
                  <p className={styles.feedbackFooter}>
                    {feedback.studentName}, {feedback.studentJob} <br /> {feedback.studentLocation}.
                  </p>
                </div>
              </div>
              : <></>
          )}
        </div>
      </div>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingContainerHeader} >
          <h3>
            Start learning now
          </h3>
          <p>with a &#3647;170 trial Lesson!</p>
        </div>
        <Link href='/pricing'>
          <div className={styles.pricingContainerLink}>
            <p> <span>MORE ABOUT</span> PRICING</p>
          </div>
        </Link>
        <p className={styles.priceContainerFooter}>Learning materials, homeworks and exercices always included </p>
      </div>
    </>
  )
}
