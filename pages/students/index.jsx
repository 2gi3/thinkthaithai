import styles from '../../styles/studentsIndex.module.scss';
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return { props: { data } }
}

const Profiles = ({ data }) => {
    return (
        <div className={styles.container}>
            <h1>List of test students</h1>
            {data.map(student => (
                <Link
                    href={{
                        pathname: '/students/[id]',
                        query: { id: student.id }
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