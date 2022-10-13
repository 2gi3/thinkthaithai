import { useState, useRef, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './singleStudent.module.scss'

const SingleStudent = () => {
    const [student, setStudent] = useState([])
    const [Name, setName]= useState()
    const[Email, setEmail]= useState()
    const router = useRouter()
    let studentId = router.query.id

    const updateStudent = (e, id) => {
        const JWT = sessionStorage.getItem('token')
        // const studentId= student.id
        e.preventDefault()

        const userData = JSON.stringify({
            name: Name,
            email : Email,
            password: student.password
        })
        // console.log(userData)
        fetch(`https://www.thikthaithai.com/api/students/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JWT}`
            },
            body: userData,
            redirect: 'follow'
        }
        )
            .then((res) => {
                console.log(res)
                return res.json();
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const deleteStudent = (id) => {
        const JWT = sessionStorage.getItem('token')
        // const studentId= student.id
        // e.preventDefault()

        // const userData = JSON.stringify({
        //     name: Name,
        //     email : Email,
        //     password: student.password
        // })
        // console.log(userData)
        fetch(`https://www.thikthaithai.com/api/students/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JWT}`
            },
            // body: userData,
            // redirect: 'follow'
        }
        )
            .then((res) => {
                console.log(res)
                router.back()
                return res.json();
            })
            .catch((err) => {
                console.log(err.message);
            })
    }



    useEffect(
        () => {
            const fetchData = async () => {
                const JWT = sessionStorage.getItem('token')
                const res = await fetch(
                    // 'http://thinkthaithai.vercel.app/api/students'
                    `https://www.thikthaithai.com/api/students/${studentId}`
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
                <form
                onSubmit={e => updateStudent(e, student._id)}
            >
                <p>Every input field must be filled</p>
                <div className={styles.inputBox}>
                    <label htmlFor="name"> Name</label>
                    <input type="text" id="name" name="name" defaultValue={student.name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="name"> Email</label>
                    <input type="text" id="name" name="name"  defaultValue={student.email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                {/* <div className={styles.inputBox}>
                    <label htmlFor="name"> Password </label>
                    <input type="password" name="password" placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                    />
                </div> */}
                <button className="primaryButton sauceButton" type="submit" value="submit">
                    <span>Update</span>
                </button>


            </form>
                </div>
                <div>
                    <button
                    onClick={event => deleteStudent(student._id)}
                    >
                        Delete
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SingleStudent