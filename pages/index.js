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
      <div className={styles.container}>
        <h1>Home page</h1>
        <p>Labore nisi consectetur occaecat do. Lorem cupidatat tempor fugiat excepteur laborum occaecat incididunt laboris reprehenderit adipisicing. Duis duis veniam in consectetur ipsum laborum consectetur. Qui proident consectetur cupidatat velit laborum. Ut anim sint voluptate cupidatat do mollit irure cillum ullamco.</p>
        <p>Deserunt eiusmod eiusmod sunt nulla occaecat qui. Voluptate ipsum proident sunt duis. Et id ipsum aliqua magna sunt est sit elit reprehenderit. Proident labore pariatur aliquip ea magna pariatur nisi. Eiusmod id Lorem Lorem qui eiusmod fugiat fugiat laboris.</p>
        <Link href='/students'><a>Students list</a></Link>
      </div>
    </>
  )
}
