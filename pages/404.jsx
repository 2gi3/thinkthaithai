import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound =()=>{
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push('/')

        }, 5000)

    },[])
    return(
        <div> 
            <h1>this page does not exist</h1>
            <p>go back to the <Link href='/'><a>Home page</a></Link></p>
        </div>
    )
}

export default NotFound