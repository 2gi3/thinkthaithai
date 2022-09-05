import styles from '../styles/feedbacks.module.scss';
import Image from 'next/image'

const feedbacks = () =>{
    return(
        <div className={styles.students}>
          <div className={styles.logo}>
            <h1>ThinkThaiThai</h1>
        </div>
        <h2> What my students say abuot me</h2>
        <div className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image src='/students/Shannen Li_HK.png' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            {/* <h3 className={styles.feedbackHeader}>So Much Fun</h3> */}
            <p className={styles.feedbackBody}>&quot;Kap khoon ka! Thank you Natt, I had so much fun! Your lesson structure was very neat and useful,
              and it was very relevant! I feel like I’m ready to visit Thailand now! 😍&quot;
            </p>
            <p className={styles.feedbackFooter}>
              Shanen Li Student, Hong Kong
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image src='/students/saru.png' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            {/* <h3 className={styles.feedbackHeader}>I totally recommend her lessons</h3> */}
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
            <Image className={styles.feedbackPicture} src='/students/Emily_.jpg' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            {/* <h3 className={styles.feedbackHeader}>Very kind teacher</h3> */}
            <p className={styles.feedbackBody}>Natt is a very kind teacher who taught me pronunciation practice patiently.
              Let me to improve after each class. Before teaching a new vowel, Natt would help me review what I had
              learned to strengthen my memory. Thanks, teacher Natt.
            </p>
            <p className={styles.feedbackFooter}>
              Emily Huang Accountant , Taiwan
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image className={styles.feedbackPicture} src='/students/jojo3.1.jpg' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            <p className={styles.feedbackBody}>kruu Natt is a very talkative, passionate nice person. She is very good in Thai and English. 
            I learned a lot from her about thai speaking. I enjoy every lesson with Kruu Natt very much.
            </p>
            <p className={styles.feedbackFooter}>
              Jo Jo Sales manager, Hong Kong.
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image className={styles.feedbackPicture} src='/students/Chi_Hui_Malysia.jpg' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            <p className={styles.feedbackBody}>Natt is very friendly , I like her teaching style which makes the lesson relaxed and enjoyable!
            </p>
            <p className={styles.feedbackFooter}>
              Chi Hui, student, Malaysia.
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          {/* <div className={styles.feedbackPicture}>
            <Image className={styles.feedbackPicture} src='/students/Chi_Hui_Malysia.jpg' width='100' height='100' alt='The picture of a student' />
          </div> */}
          <div className={styles.feedbackText}>
            <p className={styles.feedbackBody}>體驗課配合我個人需求，聊了一小時的ประเทศกูมี歌詞中我的諸多疑問。
            對於歌詞中各種厘語和字典查不到的泰語用法皆能提供清楚的說明，對於歌詞的詮釋也提出了很多其他老師沒有講過的新觀點。
            於課前熱心聊了不少我的學習狀況和需求，並熱心提供建議。英語算流利，
            </p>
            <p className={styles.feedbackFooter}>
             Tim, NGO, Taiwan.
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image className={styles.feedbackPicture} src='/students/Linsey_USA.jpg' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            <p className={styles.feedbackBody}>Thank you Kru Natt. You are spectacular at helping me feel confident and able in my limited Thai language skills.
             Thanks so much. Happy New Year to you and your family. </p>
            <p className={styles.feedbackFooter}>
              Lindsay, Expert Elderly care, USA.
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.feedbackPicture}>
            <Image className={styles.feedbackPicture} src='/students/amanda-1-100x100.jpg' width='100' height='100' alt='The picture of a student' />
          </div>
          <div className={styles.feedbackText}>
            <p className={styles.feedbackBody}>Thank you Kruu Natt for your patience. I know u are having a hard time
             trying to understand my broken Thai. Your are also encouraging. Giving me time to think through the question while I struggle with my answer.
             U corrected me and your smile puts me at ease. Khorpkun ka. </p>
            <p className={styles.feedbackFooter}>
            Amanda Lim, Student, Singapore
            </p>
          </div>
        </div>
        <div className={styles.feedback}>
          {/* <div className={styles.feedbackPicture}>
            <Image className={styles.feedbackPicture} src='/students/amanda-1-100x100.jpg' width='100' height='100' alt='The picture of a student' />
          </div> */}
          <div className={styles.feedbackText}>
            <p className={styles.feedbackBody}>Teacher Natt is very kind teacher 🙂 She waits for me patiently while I
             was thinking how could I say sentences. so I could try many time in the class.</p>
            <p className={styles.feedbackFooter}>
            Saori, Student, Japan
            </p>
          </div>
        </div>
      </div>
    )
}

export default feedbacks