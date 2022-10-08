import { useState, useRef, useMemo, useEffect } from 'react'
import styles from './feedbacksCRUD.module.scss'


const FeedbacksCRUD = () => {
    const [studentName, setStudentName] = useState('')
    const [studentJob, setStudentJob] = useState('')
    const [studentLocation, setStudentLocation] = useState('')
    const [feedbackTitle, setFeedbackTitle] = useState('')
    const [content, setContent] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] =useState('')
    const [imageChanged, setImageChanged] = useState(false)
    const [imagePreview, setImagePreview] = useState()


    const setFileToBase=(file)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setImage(reader.result)
        }
    }

    const createFeedback = (e) => {
        const JWT = sessionStorage.getItem('token')
        e.preventDefault()
        setFileToBase(imageUrl)

        const userData = 
        JSON.stringify(
            {
            studentName,
            studentJob,
            studentLocation,
            feedbackTitle,
            content,
            imageUrl: image
        }
        )
       
        fetch("https://thikthaithai.com/api/feedbacks", {
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
                console.log(userData);
                // console.log(imageUrl)

                return res.json();
            })
            .catch((err) => {
                console.log(err.message);
            })

    }

    function getImgData() {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageUrl);
        fileReader.addEventListener("load", function () {
          setImagePreview(this.result) ;
        });    
      
    }




    return (
        <div className={styles.container}>
            <h1>Feedbacks</h1>
            <div className={styles.createFeedback}>
                <form onSubmit={e => createFeedback(e)}>
                    <div className={styles.inputBox}>
                        <label htmlFor="name"> Name</label>
                        <input type="text" id="name" name="name" //defaultValue={title}
                            onChange={event => setStudentName(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="job"> Job</label>
                        <input type="text" id="Job" name="Job" 
                            onChange={event => setStudentJob(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="location"> Location</label>
                        <input type="text" id="location" name="location" //defaultValue={title}
                            onChange={event => setStudentLocation(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="feedbackTitle"> Feedback title</label>
                        <input type="text" id="feedbackTitle" name="feedbackTitle" //defaultValue={title}
                            onChange={event => setFeedbackTitle(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="content"> Content</label>
                        <input type="text" id="contene" name="content" //defaultValue={title}
                            onChange={event => setContent(event.target.value)}
                        />
                    </div>
                    <div className="addImageButton">
                            <input className=" sauceButton "type="file" name="imageUrl" 
                                onInput={(event) => {setImageUrl(event.target.files[0])}}
                                onChange={(e)=> {setImageChanged(true)
                                    getImgData()} }
                                
                                accept="image/png, image/jpeg, image/jpg, image/webp">
                            </input>
                    </div>
                    <img height="100px" src={imagePreview} />

                    <button className="primaryButton sauceButton" type="submit" value="submit">
                    <span>Create </span>
                </button>
                </form>


            </div>
        </div>
    )
}

export default FeedbacksCRUD