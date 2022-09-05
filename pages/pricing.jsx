import styles from '../styles/pricing.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { checkOut } from '../checkOut';
import Head from 'next/head'


const pricing = () => {
    const price100 = "price_1LaO82A9zEY10SLQnsojks9L"
    const price180 = "price_1LaO8rA9zEY10SLQvFuvrMxf"
    const price300 = "price_1LaO9KA9zEY10SLQNXETXalI"


    return (<>

        <div className={styles.logo}>
        <Head>
        <title>ThinkThaiThai</title>
        <meta name="description" content="Learn thai test" />
        {/* <meta property="og:image" content="/1.png" /> */}
        <meta property="og:url" content="https://thinkthaithai.vercel.app/" />
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
          content={"https://thinkthaithai.vercel.app/1.png"}
        />

        <link rel="icon" href="/logo.webp" />
      </Head>
            <h1>ThinkThaiThai</h1>
        </div>
        <div className={styles.lessonsInfo}>
            <div className={styles.normalLessons}>
                <h3>Regular lessons</h3>
            <p>
                 Last 50 minutes, and you will receive homeworks and study material to prepare yourself for the next one.
            </p>
            </div>
            <div className={styles.trialLessons}>
                <h3>Trial lessons</h3>
            <p>
                Last 25 minutes and are intended for new students.
            </p>
            </div>
        </div>
        <div className={styles.pricingContainer}>
            <h1 className={styles.pricingHeader}> Pricing in THB</h1>
            {/* <h3>lessons</h3> <h3 className={styles.price}>price</h3> */}
            <p>Trial Lesson</p>
            <p>&#3647;170</p>
            <div className={styles.buyButton}>
                {/* --START--PAypal button $5 */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="38H5YWMJAU7B6" />
                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>
                {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="LMA84BGNCAF44" />
                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form> */}
                {/* --END--PAypal button $5 */}

                {/* <button onClick={(()=>{checkOut(price180)})}> */}
                {/* &#36;5 */}
                {/* BUY */}
                {/* </button>  */}
            </div>
            <p>5 Lessons</p>
            <p>&#3647;3,750</p>
            <div className={styles.buyButton}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="UJFMQGSW7Z9TG" />
                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>
                {/* <button
             onClick={(()=>{checkOut(price100)})}
             > */}
                {/* &#36;100 */}
                {/* BUY */}
                {/* </button>  */}
            </div>
            <p>10 Lessons</p>
            <p>&#3647;7,200</p>
            <div className={styles.buyButton}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="DCA7JRLXNHXCW" />
                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>

                {/* <button onClick={(() => { checkOut(price180) })}> */}
                {/* &#36;180 */}
                {/* BUY */}
                {/* </button> */}
            </div>
            <p>20 Lessons</p>
            <p>&#3647;13,000</p>
            <div className={styles.buyButton}>
                {/* <button onClick={(()=>{checkOut(price300)})}> */}
                {/* &#36;300 */}
                {/* BUY */}
                {/* </button>  */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="UJFMQGSW7Z9TG" />
                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>

            </div>
            <p className={styles.pricingFooter}>Lerning material &#38; Homeworks always included</p>
        </div>
        {/* <div className={styles.buttonContainer}> */}
        {/* <Link href='/#'><button */}
        {/* className={styles.button} */}
        {/* >&#36;5 trial lesson */}
        {/* </button></Link> */}
        {/* </div> */}


        {/* <div className={styles.paymentMethods}>
            <p>Paypal</p>
            <p>credit / debit card</p>
        </div> */}
    </>
    )
}

export default pricing