import { useState, useRef, useMemo, useEffect } from 'react'
import styles from './NewStudentForm.module.scss'



const NewStudentForm = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageChanged, setImageChanged] = useState(false)
    const [imagePreview, setImagePreview] = useState()

    const createStudent = (e) => {
        const JWT = sessionStorage.getItem('token')
        e.preventDefault()

        const userData = JSON.stringify({
            name,
            email,
            password
        })
        // console.log(userData)
        fetch("https://www.thinkthaithai.com/api/students", {
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
            .then((res) => {
                console.log(res)
                return res.json();
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    // Preview loaded image
    // function getImgData() {
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(imageUrl);
    //     fileReader.addEventListener("load", function () {
    //       setImagePreview(this.result) ;
    //     });  
    //   }
    return (
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
                    <label htmlFor="name"> Password </label>
                    <input type="password" name="password" placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                {/* <div className="addImageButton">
                            <input className=" sauceButton "type="file" name="imageUrl" 
                                onInput={(event) => {setImageUrl(event.target.files[0])}}
                                onChange={(e)=> {setImageChanged(true)
                                    getImgData()} }
                                
                                accept="image/png, image/jpeg, image/jpg, image/webp">
                            </input>
                    </div>
                    <img height="100px" src={imagePreview} /> */}
                <button className="primaryButton sauceButton" type="submit" value="submit">
                    <span>Create</span>
                </button>


            </form>
        </div>
    )
}

export default NewStudentForm