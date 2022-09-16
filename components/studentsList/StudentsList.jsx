import Link from 'next/link'
import { useState, useRef, useMemo, useEffect } from 'react'
import styles from './studentsList.module.scss'


const StudentsList = () => {
    const [students, setStudents] = useState([])

    const fetchData = async () => {
        const res = await fetch(
            // 'http://thinkthaithai.vercel.app/api/students'
            'http://localhost:3000/api/students'
            ,
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOiI2MzE3ZmExNjM5YmUxODE5ZDRiNDVkZTUiLCJpYXQiOjE2NjMzMTI2NjMsImV4cCI6MTY2MzM5OTA2M30.93BiDuhyrUpLLWo23U8e_N-AjgubjGIv8UYZn7QMR1I"
                }
            }
        );
        const rawData = await res.json();
        const data = rawData.data
        console.log(data)
        setStudents(data)
        return(data)
    }

    useEffect(
        () => {
          fetchData()

            
        }, [])

    return (
        <>
        <div className={styles.container}>
            <h1>List of test students</h1>
            {students.map(student => (
                <Link
                    href={{
                        pathname: '/students/[id]',
                        query: { id: student._id }
                    }}
                    key={student.id}>
                    <div className={styles.student}>
                        <h3>{student.name}</h3>
                        {/* <p>{student.email}</p>
                        <p>{student.address.city}</p> */}
                    </div>
                </Link>
            ))}
        </div>
        </>

    )
}
export default StudentsList