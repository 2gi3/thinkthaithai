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
        <p>Trial Lesson</p>
         <p>&#36;5</p>
            <div className={styles.buyButton}>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="LMA84BGNCAF44" />
<input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
</form>
            {/* <button onClick={(()=>{checkOut(price180)})}> */}
                {/* &#36;5 */}
                {/* BUY */}
            {/* </button>  */}
            </div>
        <p>5 Lessons</p> 
        <p>&#36;100</p>
            <div className={styles.buyButton}>
            {/* <button
             onClick={(()=>{checkOut(price100)})}
             > */}
                {/* &#36;100 */}
                {/* BUY */}
            {/* </button>  */}
            </div>
        <p>10 Lessons</p>
         <p>&#36;180</p>
            <div className={styles.buyButton}>
            <button onClick={(()=>{checkOut(price180)})}>
                &#36;180
                {/* BUY */}
            </button> 
            </div>
        <p>20 Lessons</p>
         <p>&#36;300</p>
            <div className={styles.buyButton}>
            {/* <button onClick={(()=>{checkOut(price300)})}> */}
                {/* &#36;300 */}
                {/* BUY */}
            {/* </button>  */}
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
{/* <input type="hidden" name="encrypted" value={`${paypal3}`} /> */}
<input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
</form>

            </div>
        <p className={styles.pricingFooter}>Lerning material and Homeworks always included</p>
        </div>
        {/* <div className={styles.buttonContainer}> */}
                {/* <Link href='/#'><button */}
                    {/* className={styles.button} */}
                {/* >&#36;5 trial lesson */}
                {/* </button></Link> */}
            {/* </div> */}
            {/* <div className={styles.buttonContainer}> */}
                {/* <button className={styles.button}> */}
                {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHTwYJKoZIhvcNAQcEoIIHQDCCBzwCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYB+JSpzvIjfFbDZ4Fx/WHZqv6Gu+/Dssn5s+gEqsgpLY0VqtG6sa8haGdi3L7N3WFmqJ1GNrHhPYtrLR1ATBb1LYa/niIRhY94Zy/TG2hSncR7s6dFi0l6jgx0mwOFq+6S83MBfQjU3oAcr4UvLjzb+ac4O7PtV0O5H0T+CpwElEjELMAkGBSsOAwIaBQAwgcwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQI58za7XwCiY2AgahDxi9hSutQRnAKyXXesL6+qqnFM20NUXp2NPXmvZTm0SldDe8gizDHxbNLjHmCJoYJndQn8Oi/oTef96monml4hQMrnbJnZrDypBQmLE6G39TWmMMq4uYyzBQwD2tSjPuud54h4fU/l3Z5A+XZdjoUUg2oW8mWTECSb8XXB0KDKOerS9VKOWnmfBjZ8FveGReXQAXqCSqasJ22nASAomgqee8z7p5h3g2gggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0yMjA4MzAyMzEwMDlaMCMGCSqGSIb3DQEJBDEWBBRFUeoIIQmmlDPS+lFhHL4lukbySDANBgkqhkiG9w0BAQEFAASBgCa+2LZRqVYk3l0Hj5QsOF3uAtqr8sso2EmcWEdTXHV/sZbayRyEimMMlzCtH23cx/H+J+l0qz6ORLJI3DD6ws+XLmNS0HRkgHBy2tWj3R2weB8Phkk4cHepeI7LTxepECC0mVj92YmqmX7xhhhveu7GrQ/CKq4mWNiDQmtX67LY-----END PKCS7-----" />
<input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
</form> */}
                    
                {/* </button> */}
                {/* </div> */}
            
        {/* <div className={styles.paymentMethods}>
            <p>Paypal</p>
            <p>credit / debit card</p>
        </div> */}
        </>
    )
}

export default pricing