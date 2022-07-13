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
      {/* <div className={styles.background}>
            </div> */}
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
          <div className={styles.imageBigContainer}>
            <div className={styles.imageBig}>
              <Image className={styles.image} src='/phone.png' width='100' height='100' />
            </div>
            <div className={styles.imageBig}>
              <Image className={styles.image}src='/computer.png' width='100' height='100' />
            </div>
            <div className={styles.imageBig}>
              <Image className={styles.image}src='/tablet.png' width='120' height='100' />
            </div>
          </div>
          <div className={styles.imageSmallContainer}>
          <div className={styles.imageSmall}>
            <Image src='/ipod.png' width='50' height='50' />
          </div>
          <div className={styles.imageSmall}>
            <Image src='/ear.png' width='50' height='50' />
          </div>
          <div className={styles.imageSmall}>
            <Image src='/listen.png' width='50' height='50' />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
