import styles from '../../styles/studentPage.module.scss';

export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json()
    const paths = data.map(student => {
        return{
            params: {id: student.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json()

    return { props: { data } }
}
const Details = ({data}) =>{
    return(
        <div className={styles.container}>
            <h1> {data.name} details</h1>
            <p>{data.email}</p>
            <p>{data.address.city}</p>
        </div>

    )
}

export default Details