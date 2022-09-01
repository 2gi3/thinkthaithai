import Head from 'next/head'
import styles from '../styles/myblog.module.scss'
import Link from 'next/link'
import Image from 'next/image'

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
    return (
        <div className={styles.blogContainer}>
            <div className={styles.startLearning}>
                <h3>Start learning the basics of Thai language</h3>
                <div className={styles.startLearningFirftLesson}>
                    <h4> Main differences between thai and English language</h4>
                    <p>Duis cillum excepteur exercitation minim. In incididunt Lorem officia in amet commodo tempor non.
                        Cillum nisi dolore et ea consectetur.
                    </p>
                    <p>Officia elit fugiat ipsum excepteur cupidatat culpa est tempor. Irure non adipisicing
                        incididunt ea occaecat cupidatat ullamco aliqua. Culpa velit id do sint. Nostrud aliquip aute et consectetur consectetur esse adipisicing enim.</p>
                    <p>Ea deserunt culpa ut Lorem mollit in. Quis irure sit magna consectetur do dolor aliqua irure do non est.
                        Nulla incididunt deserunt fugiat ad excepteur nisi minim magna sunt proident. Non culpa velit minim Lorem.
                    </p>
                </div>
                <div>
                    <h4> Recorded new student&apos;s lesson</h4>
                    {/* <video src="" controls type="video/mp4" height='100' width='150'
                        loading="lazy" allowFullScreen="" frameBorder="0">
                    </video> */}
                    <iframe src="https://drive.google.com/file/d/1djizhCmnKYSYVg6uYXu1pEeo0XvE8DsB/preview"
                        width="320" height="240" allowFullScreen=""></iframe>
                    <iframe src="https://drive.google.com/file/d/1Kle6aubivBUFGVwvpFsO9k1kHWehbRzG/preview"
                        width="320" height="240" allowFullScreen="">
                    </iframe>
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