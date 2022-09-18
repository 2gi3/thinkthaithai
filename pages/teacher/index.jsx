import Link from 'next/link'
import FeedbacksCRUD from '../../components/teacher/FeedbacksCRUD';
import LogIn from '../../components/teacher/LogIn';
import styles from '../../styles/teacherIndex.module.scss';
const teacher = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardTitle}>
                <h1>Teacher Dashboard TEST</h1>
            </div>
            <LogIn />
            <Link href='/students'>
                <div className={styles.dashboardBox}>
                    Students
                </div>
            </Link>
            <div className={styles.dashboardBox}>
            <FeedbacksCRUD />
            </div>
        </div>
    )
}

export default teacher