import { useState, useRef, useMemo, useEffect } from 'react'
import styles from './NewStudentForm.module.scss'



const NewStudentForm =()=>{
    
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createStudent =(e)=>{
        const JWT = sessionStorage.getItem('token')
        e.preventDefault()

        const userData = JSON.stringify({
            name,
            email,
            password
        })
        // console.log(userData)
        fetch("http://localhost:3000/api/students", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${JWT}`
                  },
                body: userData,
                redirect: 'follow'
              }
             )
            .then((res)=>{
                console.log(res)                
                return res.json(); })
                .catch((err) => {
                    console.log(err.message);                    
                })
    

    }
    return(
        <div className={styles.container}>
         <form
                    onSubmit={e => createStudent(e)}
                    >
                    <p>Every input field must be filled</p>
                    <div className={styles.inputBox}>
                        <label htmlFor="name"> Name</label>
                        <input type="text" id="name" name="name" //defaultValue={title}
                        onChange={event => setName(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="name"> Email</label>
                        <input type="text" id="name" name="name"// defaultValue={title}
                        onChange={event => setEmail(event.target.value)}
                        />
                    </div>
<div className={styles.inputBox}>
                        <label htmlFor="name"> Email</label>
                        <input type="password" name="password" placeholder="Password"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <button className="primaryButton sauceButton" type="submit" value="submit">
                            <span>Create </span>
                        </button>


                    </form>
        </div>
    )
}

export default NewStudentForm