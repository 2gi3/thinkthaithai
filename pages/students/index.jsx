import styles from '../../styles/studentsIndex.module.scss';
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/students', 
    {
      method: 'GET',
      headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOiI2MzE5N2JlMjk2NGIwN2I2ODkwYTQ0ZjciLCJpYXQiOjE2NjI2MTQ1MzEsImV4cCI6MTY2MjcwMDkzMX0.71pv30-6bcG8xvYT8U3azxSrYeDkKyjAieUR0SjNlCA"
    }}
    );
    const rawData= await res.json();
    const data = rawData.data
    console.log(data)

    return { props: { data } }
}

const Profiles = ({ data }) => {
    let testtt = async () =>{
        const res = await fetch('/api/students'
        )
        const data = await res.json()
        console.log(data.data);
      }
      testtt()
    return (
        <div className={styles.container}>
            <h1>List of test students</h1>
            {data.map(student => (
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
    )
}

export default Profiles 