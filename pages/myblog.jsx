import Head from 'next/head'
import styles from '../styles/myblog.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import useToggle from '../functions/useToggle'

export const getStaticProps = async () => {
    const instagramToken = process.env.I_KEY
    // const URL = 'https://graph.instagram.com/me/media?fields=id,username,media_url,timestamp,media_type,permalink&access_token=IGQVJWbFBHNE5jTENuOXJDVlF4cjJOa0lnUUNQZA1pTeTdTN0NUZA3piS2ZACX3BIcTdsTmpDYWl5aUZAlc1gxaTcxcVJsQXB6eElENUdGR2RyNFExYVlmZAGR5eHRURndYUk5iN0ttT2kxN2RLWW1semRpTQZDZD'
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,username,thumbnail_url,media_url,timestamp,media_type,permalink&access_token=${instagramToken}`);
    const feed = await res.json();
    console.log(feed.data)

    return {
        props: { feed },
        // revalidate:600
    }
}

const MyBlog = ({ feed }) => {
    const data = feed.data
    const [value, toggleValue] = useToggle(false)
    return (
        <div className={styles.blogContainer}>
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
            <div className={styles.logo}>
                <h1>ThinkThaiThai</h1>
            </div>
            <div className={styles.startLearning}>
                <h2>Start learning the basics of Thai language</h2>
                <div className={styles.startLearningVideos}>
                    <h4> Recorded new student&apos;s lesson</h4>
                    <div className={styles.scene__buttons}>
                        <button
                            className={value === false ? styles.scene__buttonOn : styles.scene__buttonOff}
                            onClick={() => { value === true ? toggleValue(false) : toggleValue(true) }}>
                            Part 1
                        </button>
                        <button className={value === false ? styles.scene__buttonOff : styles.scene__buttonOn}
                            onClick={() => { value === true ? toggleValue(false) : toggleValue(true) }}>
                            Part 2
                        </button>
                    </div>
                    < div className={styles.scene}>
                        <div className={styles.scene__object} id={value === false ? styles.scene__objectFlip: null}>
                            <div className={styles.scene__objectVideo1} >
                                <iframe src="https://drive.google.com/file/d/1djizhCmnKYSYVg6uYXu1pEeo0XvE8DsB/preview"
                                    width="245" height="184" allowFullScreen="">
                                </iframe>
                            </div>
                            <div className={styles.scene__objectVideo2}>
                                <iframe src="https://drive.google.com/file/d/1Kle6aubivBUFGVwvpFsO9k1kHWehbRzG/preview"
                                    width="245" height="184" allowFullScreen="">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.teacerClassesVideos}>
                <h3>Some examples of my classes</h3>
                <div className={styles.classVideo}>
                    <h3>Speaking</h3>
                    <video src="https://res.cloudinary.com/gippolito/video/upload/v1661824864/thinkthaithai/speaking_chsr3p.mp4"
                        controls height='' width='280' loading="lazy" allowFullScreen="" frameBorder="0">
                    </video>
                </div>
                <div className={styles.classVideo}>
                    <h3>Writing</h3>
                    <video src="https://res.cloudinary.com/gippolito/video/upload/v1661824840/thinkthaithai/Reading_wofifh.mp4"
                        controls height='' width='280' loading="lazy" allowFullScreen="" frameBorder="0">
                    </video>
                </div>
                <div className={styles.classVideo}>
                    <h3>Conversation</h3>
                    <video src="/videos/conversation2.mp4" controls height='' width='280'
                        loading="lazy" allowFullScreen="" frameBorder="0">
                    </video>
                </div>
            </div>
            <h1 className={styles.blogTitle}>My instagram posts</h1>
            {data.map((post, index) => (
                // <Link key={post.id} href={post.media_url} >
                //     <div>
                //         {/* <p>{post.caption}</p> */}
                //         <img src={post.thumbnail_url} width='100'  />
                //     </div>
                // </Link>
                index < 5 ?
                    <div className={styles.blogVideoContainer} key={post.id}>
                        {/* <Link key={post.id} href={post.permalink} > */}
                        <video className={styles.blogVideo} key={post.id} src={post.media_url} controls type="video/mp4"
                            height='200'
                            // width='150'
                            loading="lazy" allowFullScreen="true" frameBorder="0">
                        </video>
                        {/* </Link> */}
                    </div> : <></>

            ))}
        </div>
    )
}

export default MyBlog