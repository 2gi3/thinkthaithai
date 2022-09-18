import Link from 'next/link'
import { useState, useRef, useMemo, useEffect } from 'react'
import NewStudentForm from '../teacher/NewStudentForm'
import styles from './studentsList.module.scss'


const StudentsList = () => {
    const [students, setStudents] = useState([])

   

    useEffect(
        () => {
            const fetchData = async () => {
                const JWT = sessionStorage.getItem('token')
                const res = await fetch(
                    // 'http://thinkthaithai.vercel.app/api/students'
                    'http://localhost:3000/api/students'
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
                setStudents(data)
                return(data)
            }
            
          fetchData()

            
        }, [])

    return (
        <>
        <div className={styles.container}>
            <h1>List of test students</h1>
            <div>
            <NewStudentForm />
            </div>
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