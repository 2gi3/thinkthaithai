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
        props: {feed },
        // revalidate:600
     }
}

const MyBlog = ({ feed }) => {
    const data = feed.data
    return(
        <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>My instagram posts</h1>
        {data.map(post => (
            // <Link key={post.id} href={post.media_url} >
            //     <div>
            //         {/* <p>{post.caption}</p> */}
            //         <img src={post.thumbnail_url} width='100'  />
            //     </div>
            // </Link>
            <div className={styles.blogVideoContainer} key={post.id}>
                {/* <Link key={post.id} href={post.permalink} > */}
            <video className={styles.blogVideo} key={post.id} src={post.media_url} controls type="video/mp4" 
            height='200' 
            // width='150'
                loading="lazy" allowFullScreen="true" frameBorder="0">
              </video>
              {/* </Link> */}
              </div>

        ))}
        </div>
    )
}

export default MyBlog