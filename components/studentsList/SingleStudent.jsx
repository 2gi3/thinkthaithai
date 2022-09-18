import { useState, useRef, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './singleStudent.module.scss'

const SingleStudent = () => {
    const [student, setStudent] = useState([])
    const router = useRouter()
    let studentId = router.query.id


    useEffect(
        () => {
            const fetchData = async () => {
                const JWT = sessionStorage.getItem('token')
                const res = await fetch(
                    // 'http://thinkthaithai.vercel.app/api/students'
                    `http://localhost:3000/api/students/${studentId}`
                    ,
                    {
                        method: 'GET',
                        headers: {
                            "Authorization": `Bearer ${JWT}`
                        }
                    }
                );
                const rawData = await res.json();
                const data = rawData.data
                console.log(data)
                setStudent(data)
                return (data)
            }
            fetchData()


        }, [])
    return (
        <div className={styles.container}>
            <h1> {student.name}</h1>
            <h4>Email</h4>
            <p>{student.email}</p>
            <div className={styles.buttons}>
                <div>
                    <button>Update</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default SingleStudent