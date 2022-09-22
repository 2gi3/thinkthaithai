import { useState, useRef, useMemo, useEffect } from 'react'
import Link from 'next/link'
import FeedbacksCRUD from '../../components/teacher/FeedbacksCRUD';
import LogIn from '../../components/teacher/LogIn';
import styles from '../../styles/teacherIndex.module.scss';

const teacher = () => {

    const[JWT, setJWT] = useState(null)
    const [status, setStatus] = useState('out')
    // let JWT 

    useEffect(
        () => {
                setJWT(sessionStorage.getItem('token'))
        },[])
        
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardTitle}>
                <h1>Teacher Dashboard TEST</h1>
            </div>
            {/* <LogIn /> */}
            {JWT === null? <LogIn />  : 
            <div>
            <Link href='/students'>
                <div className={styles.dashboardBox}>
                    Students
                </div>
            </Link>
            <div className={styles.dashboardBox}>
            <FeedbacksCRUD />
            </div>
            </div>}
        </div>
    )
}

export default teacher