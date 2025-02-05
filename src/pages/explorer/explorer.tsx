import './explorer.scss'
import { useBlogContext } from '../../context/BlogContext'
import BlogCard from '../../components/BlogCard/BlogCard'
import { useEffect } from 'react'
import base64ToFile from '../../utils/Base64toFile'

export default function Explorer() {
    let {data, setBlogContext}= useBlogContext()
    
    useEffect(()=>{
        console.log(data.length);
        if (data.length ==0){
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i); // Get the key at index i
                if (!key) continue
                const value = localStorage.getItem(key); // Get the value for that key
                if (!value) continue
                let blog = JSON.parse(value)
                blog = {...blog, thumbnail: base64ToFile(blog.thumbnail, '')}
                setBlogContext(p=> [...p, blog])
              }
        }
    }, [])
    
return<>
    <div className="explorer">
        {(data.length===0 || localStorage.length===0) && <h1 style={{textAlign: 'center'}}>Upload Blogs to see Blogs here</h1>}
        {data.map((blog, i)=>{
            return <BlogCard key={i} {...blog} />
        })}
    </div>
</>
}
