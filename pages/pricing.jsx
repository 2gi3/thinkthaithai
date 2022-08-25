import styles from '../styles/pricing.module.scss';
import { checkOut } from '../checkOut';

const pricing = () =>{
    const price100 = "price_1LaO82A9zEY10SLQnsojks9L"
    const price180 = "price_1LaO8rA9zEY10SLQvFuvrMxf"
    const price300 = "price_1LaO9KA9zEY10SLQNXETXalI"
    
    return(<>
        <div className={styles.pricingContainer}>
        <h1 className={styles.pricingHeader}> pricing</h1>
        <h3>Number of lessons</h3> <h3>price</h3>
        <p>5</p> 
            <button onClick={(()=>{checkOut(price100)})}>
                <p>&#36;100</p>
            </button> 
        <p>10</p> 
            <button onClick={(()=>{checkOut(price180)})}>
                <p>&#36;180</p>
            </button> 
        <p>20</p> 
            <button onClick={(()=>{checkOut(price300)})}>
                <p>&#36;300</p>
            </button> 
        <p className={styles.pricingFooter}>Lerning material and Homeworks always included</p>
        </div>
        <div className={styles.paymentMethods}>
            <p>Paypal</p>
            <p>credit / debit card</p>
        </div>
        </>
    )
}

export default pricing