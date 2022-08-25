import styles from '../styles/pricing.module.scss';
import Link from 'next/link'
import { checkOut } from '../checkOut';

const pricing = () =>{
    const price100 = "price_1LaO82A9zEY10SLQnsojks9L"
    const price180 = "price_1LaO8rA9zEY10SLQvFuvrMxf"
    const price300 = "price_1LaO9KA9zEY10SLQNXETXalI"
    
    return(<>
        <div className={styles.pricingContainer}>
        <h1 className={styles.pricingHeader}> pricing</h1>
        {/* <h3>lessons</h3> <h3 className={styles.price}>price</h3> */}
        <p>5 Lessons</p> 
        {/* <p>&#36;100</p> */}
            <div className={styles.buyButton}>
            <button onClick={(()=>{checkOut(price100)})}>
                &#36;100
                {/* BUY */}
            </button> 
            </div>
        <p>10 Lessons</p>
         {/* <p>&#36;180</p> */}
            <div className={styles.buyButton}>
            <button onClick={(()=>{checkOut(price180)})}>
                &#36;180
                {/* BUY */}
            </button> 
            </div>
        <p>20 Lessons</p>
         {/* <p>&#36;300</p> */}
            <div className={styles.buyButton}>
            <button onClick={(()=>{checkOut(price300)})}>
                &#36;300
                {/* BUY */}
            </button> 
            </div>
        <p className={styles.pricingFooter}>Lerning material and Homeworks always included</p>
        </div>
        <div className={styles.buttonContainer}>
                <Link href='/#'><button
                    className={styles.button}
                >&#36;5 trial lesson
                </button></Link>
            </div>
        {/* <div className={styles.paymentMethods}>
            <p>Paypal</p>
            <p>credit / debit card</p>
        </div> */}
        </>
    )
}

export default pricing