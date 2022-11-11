// import useToggle from './useToggle'
import { useState} from 'react'

const getExchangeRates = async (from, to, amount) => {
    // const [value, toggleValue] = useToggle(false)
    const [currencyContainer, setCurrencyContainer] = useToggle(false)
    const teacherCurrency = 'thb'
    const [studentCurrency, setStudentCurrency] = useState(<span>&#3647;</span>)
    const trialLessonPrice = 170
    const [displayedPrice, setDisplayedPrice] =useState(trialLessonPrice)
    const availableCurrencies =['AUD','CNY','EUR','GBP','HKD','KRW','JPY','TWD','USD', ]

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

  export default getExchangeRates