import { useState, useRef, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'

const SingleStudent =()=>{
    const [student, setStudent] = useState([])
    const router = useRouter()
    let studentId = router.query.id
    const fetchData = async () => {
        const res = await fetch(
            // 'http://thinkthaithai.vercel.app/api/students'
            `http://localhost:3000/api/students/${studentId}`
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
        setStudent(data)
        return(data)
    }

    useEffect(
        () => {
          fetchData()

            
        }, [])
    return(
        <>
        <h1> {student.name}</h1>
        <h4>Email</h4>
        <p>{student.email}</p>
        
        </>
    )
}

export default SingleStudent