import './BlogCard.scss'
import * as types from '../../types/blog'
import  {useState, useEffect} from 'react'
import { Heart } from 'lucide-react';
import { useBlogContext } from '../../context/BlogContext';

const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

function BlogCard({uid, blogTitle, authName, thumbnail, desc, webUrl, views}: types.blogTemplate) {
    const [imageUrl, setImageUrl] = useState<string>("");
    let [liked, setLiked] = useState<boolean>(false)
    let {data, setBlogContext} = useBlogContext()

  useEffect(() => {
    if (thumbnail) {
      const imgUrl = URL.createObjectURL(thumbnail);
      setImageUrl(imgUrl);

      return () => URL.revokeObjectURL(imgUrl); 
    }
  }, [thumbnail]);
  return (
    <div className='blog-card'>
        <img src={imageUrl} alt="blog image" />
        <div className="titleinfo">
            <h2>{blogTitle}</h2>
            <div className="info">
                <div className="views">Views: <i>{views}</i></div>
                <div onClick={()=> {setLiked(p=>!p)}}>
                    <Heart color={liked ? 'red' : 'gray'} size={32} />
                </div>
            </div>
        </div>
        
        <p>{authName}</p>
        <p>{desc}</p>
        <div className="blog-opers">
            <div className='open-link' onClick={()=> {
            openInNewTab(webUrl)
            setBlogContext((p)=>p.map((e)=>{
                if (e.uid === uid) {

                    return {...e, views: views+1}
                }
                return e
            }))}}>
            Visit Blog
            </div>
            <div className="delete-blog"
            onClick={()=>{
                setBlogContext((p)=>{
                    return p.filter(e=> {
                        for (let i = 0; i < localStorage.length; i++) {
                            const key = localStorage.key(i); // Get the key at index i
                            if (!key) continue
                            let value = localStorage.getItem(key); // Get the value for that key
                            if (!value) continue
                            let isDel = JSON.parse(value)
                            if (isDel.uid == uid){
                                localStorage.removeItem(key)
                            }
                          }
                        return e.uid !== uid
                    })
                })
            }}
            >
                Delete blog
            </div>
        </div>
        
    </div>
  )
}

export default BlogCard