import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router'
import styles from './logIn.module.scss'


const LogIn =()=>{
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logInMessage, setLogInMessage] = useState("You have entered an invalid username or password")
    const [afterLogIn, setAfterLogIn] = useState('')
    const inputRef = useRef(null)
    const [emailWarning, setEmailWarning] = useState('')
    const [passwordWarning, setPasswordWarning] = useState('')
    const re = /\S+@\S+\.\S+/g;
    const [logInResponse, setLogInResponse] = useState('hidden')
    // const [logInMessage, setLogInMessage] = useState("You have entered an invalid username or password")
    const userData = JSON.stringify({
        email,
        password
    })

    const logIn = (e,) => {
        e.preventDefault();

        console.log(userData)
        // if (!re.test(email)) {
        //     setLogInMessage("Please provide a valid email address")
        //     setLogInResponse("appear secondaryColor");
        // } else {
            fetch("https://thinkthaithai.com/api/students/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: userData,
                redirect: 'follow'
              }
             )
            .then((res)=>{ return res.json(); })
                .then(
                    (data) => {
                        sessionStorage.setItem("token", data.token)
                        sessionStorage.setItem("userId", data.studentId)
                        sessionStorage.setItem("email", data.studentEmail)
                        console.log(data);

                        router.reload(window.location.pathname)
                    })
                .catch((err) => {
                    // setLogInResponse("appear primaryColor");
                    // setLogInMessage("You have entered an invalid username or password")
                    console.log(err.message);
                    
                });
        // }
    }

    useEffect(() => {
        inputRef.current.focus()

    }, [])

    return(
        <div className={styles.container}>
        <form onSubmit={event => logIn(event)}>
                    <div className={styles.inputBox}>
                        <input ref={inputRef} type="email" name="userEmail" placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <div className={styles.icon}>
                            {/* <FontAwesomeIcon icon={faAt} /> */}
                        </div>
                        {/* <h1>{emailWarning}</h1> */}
                    </div>
                    <div className={styles.inputBox}>
                        <input type="password" name="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <div className={styles.icon}>
                            {/* <FontAwesomeIcon icon={faKey} /> */}
                        </div>
                        {/* <h1>{passwordWarning}</h1> */}
                    </div>
                    {/* <div className={styles.logInMessage"> <p>{logInMessage}</p></div> */}
                    <div className={styles.logInSignUpButtons}>
                        <button className={styles.primaryButton} type="submit" value="submit">
                            log in
                            {/* <span>Log&nbsp;in <FontAwesomeIcon icon={faArrowRightToBracket} /></span> */}
                        </button>
                    </div>
                </form>
        </div>
    )
}

export default LogIn