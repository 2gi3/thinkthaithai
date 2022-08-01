import styles from '../styles/pricing.module.scss';

const pricing = () =>{
    return(<>
        <div className={styles.pricingContainer}>
        <h1 className={styles.pricingHeader}> pricing</h1>
        <h3>Number of lessons</h3> <h3>price</h3>
        <p>5</p> <p>&#36;100</p>
        <p>10</p> <p>&#36;180</p>
        <p>20</p> <p>&#36;300</p>
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