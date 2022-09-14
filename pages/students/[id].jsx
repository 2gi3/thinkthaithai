import styles from '../../styles/studentPage.module.scss';

export const getStaticPaths = async () =>{
    const res = await fetch('http://thinkthaithai.vercel.app/api/students/', 
    {
      method: 'GET',
      headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOiI2MzE5N2JlMjk2NGIwN2I2ODkwYTQ0ZjciLCJpYXQiOjE2NjI2MTQ1MzEsImV4cCI6MTY2MjcwMDkzMX0.71pv30-6bcG8xvYT8U3azxSrYeDkKyjAieUR0SjNlCA"
    }}
    );
    const rawData= await res.json();
    const data = rawData.data;
    const paths = data.map(student => {
        return{
            params: {id: student._id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.id;

    const res = await fetch(`http://thinkthaithai.vercel.app/api/students/${id}`, 
    {
      method: 'GET',
      headers:{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOiI2MzE5N2JlMjk2NGIwN2I2ODkwYTQ0ZjciLCJpYXQiOjE2NjI2MTQ1MzEsImV4cCI6MTY2MjcwMDkzMX0.71pv30-6bcG8xvYT8U3azxSrYeDkKyjAieUR0SjNlCA"
    }}
    );
    const rawData= await res.json();
    const data = rawData.data;

    return { props: { data } }
}
const Details = ({data}) =>{
    return(
        <div className={styles.container}>
            <h1> {data.name} details</h1>
            <p>{data.email}</p>
            {/* <p>{data.address.city}</p> */}
        </div>

    )
}

export default Details