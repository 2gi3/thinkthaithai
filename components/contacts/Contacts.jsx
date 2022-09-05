import styles from "./contacts.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const Contacts =()=>{
  return(
<div className={styles.contacts}>
                <div className={styles.contactsButtons}>
                <ul>
                    <li>
                        <Link href='https://www.instagram.com/thaiwithnatt'>
                           <a><Image src="/logo-ig-png-32461-64x64.ico" width="60px" height="60px"  alt="Instagram" /></a>
                        </Link>
                    </li>
                    <li>                      	
                       <a href="mailto:nattaporn.cl@gmail.com?subject=Message_From_ThinkThaiThai">
                          <Image src="/emailIcon.png" width="55" height="50" alt="Email" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+66924496600">
                          <Image src="/WhatsApp.webp" width="50px" height="50" alt="WhatsApp" />
                        </a>
                   </li>
                </ul>
                </div>
            </div>
  )
}

export default Contacts