import styles from './currencyExchange'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import useToggle from '../../functions/useToggle'
import { useState} from 'react'



const CurrencyExchange =(a , b)=>{

    const [currencyContainer, setCurrencyContainer] = useToggle(false)
    const teacherCurrency = 'thb'
    const [studentCurrency, setStudentCurrency] = useState(a)
    const trialLessonPrice = 170
    const [displayedPrice, setDisplayedPrice] =useState(b)
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
  
    return(
        <>
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
        </>
    )
}

export default CurrencyExchange