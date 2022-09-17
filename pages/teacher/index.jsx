import FeedbacksCRUD from '../../components/teacher/FeedbacksCRUD';
import LogIn from '../../components/teacher/LogIn';
import StudentCRUD from '../../components/teacher/StudentCRUD';
import styles from '../../styles/teacherIndex.module.scss';
const teacher =()=>{
    return(
        <div className={styles.dashboard}>
            <div className={styles.dashboardTitle}>
        <h1>Teacher Dashboard TEST</h1>
        </div>
        <LogIn />
        <StudentCRUD />
        <FeedbacksCRUD />
        </div>
    )
}

export default teacher