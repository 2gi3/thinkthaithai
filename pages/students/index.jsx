import styles from '../../styles/studentsIndex.module.scss';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // return { props: { data } }
    return { props: { data } }
}

const Profiles = ({data} ) => {
    return (
        <div className={styles.container}>
            <h1>List of test students</h1>
            {data.map(student => (
                <div className={styles.student} key={student.id}>
                    <a>
                        <h3>{student.name}</h3>
                        {/* <p>{student.email}</p>
                        <p>{student.address.city}</p> */}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Profiles 