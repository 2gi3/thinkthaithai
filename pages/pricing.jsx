import styles from '../styles/pricing.module.scss';
import Image from 'next/image';
import { checkOut } from '../checkOut';
import Head from 'next/head'
import { useState } from 'react'
import useToggle from '../functions/useToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const pricing = () => {
    const price100 = "price_1LaO82A9zEY10SLQnsojks9L"
    const price180 = "price_1LaO8rA9zEY10SLQvFuvrMxf"
    const price300 = "price_1LaO9KA9zEY10SLQNXETXalI"

    const [value, toggleValue] = useToggle(false)
    const [currencyContainer, setCurrencyContainer] = useToggle(false)
    const teacherCurrency = 'thb'
    const [studentCurrency, setStudentCurrency] = useState(<span>&#3647;</span>)
    const trialLessonPrice = 170
    const [displayedPrice, setDisplayedPrice] =useState(trialLessonPrice)
    const availableCurrencies =['AUD','CNY','EUR','GBP','HKD','KRW','JPY','TWD','USD', ]
  
    const getExchangeRates = async (from, to, amount) => {
      console.log(process.env.CURRENCY_EXCHANGE_API_KEY)
      
      const fronLower = from.toLowerCase()
      const toLower = to.toLowerCase()
      const myHeaders = new Headers();
      myHeaders.append("apikey", `${process.env.NEXT_PUBLIC_CURRENCY_EXCHANGE_API_KEY}`);
  
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      }
  
  
      const res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      const data = await res.json();
      const costInNewCurrency = data.result
      setDisplayedPrice((costInNewCurrency).toFixed(2))
      setStudentCurrency(to)
      currencyContainer===true? setCurrencyContainer(false) : setCurrencyContainer(true)//closes the currencyContainer
      return (costInNewCurrency)
    }


    return (<>

        <div className={styles.logo}>
            <Head>
                <title>ThinkThaiThai</title>
                <meta name="description" content="Learn thai test" />
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

        <div className={styles.pricingContainerExchangeButton}>
          <button onClick={()=>{
            currencyContainer===true? setCurrencyContainer(false) : setCurrencyContainer(true)
          }}>
            {currencyContainer===true? <FontAwesomeIcon icon={faXmark} />
           : <Image src={'/xchangeBig.webp'} width='55' height='55' alt='forex' />}
            {/* <FontAwesomeIcon icon={faXmark} /> */}
          </button>
        </div>
        <div className={currencyContainer=== true? styles.currencyListContainer : styles.currencyListContainerOff}>
            {availableCurrencies.map((currency, index)=>(
              <button key={index}
               onClick={()=>{
                getExchangeRates(teacherCurrency, currency, trialLessonPrice)
              }}
              >
                <span>{currency}</span>
              {/* <Image src={'/forex.png'} width='55' height='55' alt='forex' /> */}
              </button>
            ))}
            
        </div>

        <div className={styles.pricingContainer}>
            <h1 className={styles.pricingHeader}> Pricing in THB</h1>
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
                {/* --END--PAypal button $5 */}
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
            </div>
            <p>20 Lessons</p>
            <p>&#3647;13,000</p>
            <div className={styles.buyButton}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="M9WDJ2TJL3KQU" />
                    <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>

            </div>
            <p className={styles.pricingFooter}>Lerning material &#38; Homeworks always included</p>
        </div>
    </>
    )
}

export default pricing