import styles from "../styles/feedbacks.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://www.thinkthaithai.com/api/feedbacks", {
    method: "GET",
    headers: {
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOiI2MzE5N2JlMjk2NGIwN2I2ODkwYTQ0ZjciLCJpYXQiOjE2NjI2MTQ1MzEsImV4cCI6MTY2MjcwMDkzMX0.71pv30-6bcG8xvYT8U3azxSrYeDkKyjAieUR0SjNlCA"
    },
  });
  const rawData = await res.json();
  const data = rawData.data;
  console.log(data);

  return { props: { data }, revalidate: 60 };
};

const feedbacks = ({ data }) => {
  return (
    <div className={styles.students}>
      <Head>
        <title>ThinkThaiThai</title>
        <meta name="description" content="Learn thai test" />
        {/* <meta property="og:image" content="/1.png" /> */}
        <meta
          property="og:url"
          content="https://www.thinkthaithai.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Learn Thai language!" />

        <meta
          property="og:description"
          content="Explore the learning material and book a trial lesson"
        />

        <meta
          property="og:image"
          content={"https://www.thinkthaithai.vercel.app/1.png"}
        />

        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className={styles.logo}>
        <h1>ThinkThaiThai</h1>
      </div>
      <h2> What my students say about me</h2>
      {data.map((feedback) => (
        <div key={feedback._id} className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image
              src={feedback.imageUrl}
              width="100"
              height="100"
              alt="The picture of a student"
            />
          </div>
          <div className={styles.feedbackText}>
            {/* <h3 className={styles.feedbackHeader}>So Much Fun</h3> */}
            <p className={styles.feedbackBody}>{feedback.content}</p>
            <p className={styles.feedbackFooter}>
              {feedback.studentName}, {feedback.studentJob} <br />{" "}
              {feedback.studentLocation}.
            </p>
          </div>
        </div>
      ))}
      <div className={styles.feedback}>
        <div className={styles.feedbackPicture}>
          <Image
            className={styles.feedbackPicture}
            src="/joner.PNG"
            width="100"
            height="100"
            alt="The picture of a student"
          />
        </div>
        <div className={styles.feedbackText}>
          <p className={styles.feedbackBody}>
            Khruu Nat&apos;s lessons have always been entertaining and fun. I
            always like the fact that when Khruu Nat would spend time knowing
            what you do usually and teach according Thai words and phrases for
            me to learn more.
          </p>
          <p className={styles.feedbackFooter}>Joner, Hong Kong</p>
        </div>
      </div>
      <div className={styles.feedback}>
        <div className={styles.feedbackPicture}>
          <Image
            className={styles.feedbackPicture}
            src="/students/amanda-1-100x100.jpg"
            width="100"
            height="100"
            alt="The picture of a student"
          />
        </div>
        <div className={styles.feedbackText}>
          <p className={styles.feedbackBody}>
            Thank you Kruu Natt for your patience. I know u are having a hard
            time trying to understand my broken Thai. Your are also encouraging.
            Giving me time to think through the question while I struggle with
            my answer. U corrected me and your smile puts me at ease. Khorpkun
            ka.{" "}
          </p>
          <p className={styles.feedbackFooter}>
            Amanda Lim, Student, Singapore
          </p>
        </div>
      </div>
      <div className={styles.feedback}>
        <div className={styles.feedbackPicture}>
          <Image
            className={styles.feedbackPicture}
            src="/students/tom.PNG"
            width="100"
            height="100"
            alt="The picture of a student"
          />
        </div>
        <div className={styles.feedbackText}>
          <p className={styles.feedbackBody}>
            I have been studying with Natt for a while. Natt is very friendly
            and patient, giving me the impression of the smiling country of
            Thailand. The lessons are taught in English from the beginning, and
            later are taught in full Thai! &#40; I sincerely recommend that you
            have to keep the frequency of classes if you can. 2~3 classes per
            week are very effective, and your listening will increase
            instantly.&#41; Because I don&apos;t like the typical learning
            style, Natt shares some current events in Thailand, Thai culture, or
            interesting advertisements, videos, etc. every time. We chat to
            learn words &#40; take notes every time&#41; and enhance listening
            and speaking.If it is too fast or too difficult to understand, you
            can tell Natt directly. She will speak slowlyin a simple and slow
            way. Regardless of whether you have a basic knowledge of Thai or
            not, I highly recommand you can take a class with Teacher Natt!
          </p>
          <p className={styles.feedbackFooter}>Tom, Switzerland</p>
        </div>
      </div>
    </div>
  );
};

export default feedbacks;
