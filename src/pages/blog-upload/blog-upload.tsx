import './blog-upload.scss'
import { useBlogContext } from '../../context/BlogContext';
import * as types from '../../types/blog';
import React, { useState } from 'react';
import imgFileToBase64 from '../../utils/ImageFileToBase64';
import generateUID from '../../utils/Uid';

export default function BlogUpload() {
    const {data} = useBlogContext();
    const [blog, setBlog] = React.useState<types.blogTemplate>({uid:0, authName: '', blogTitle: '', desc: '', thumbnail: null, webUrl: '', views: 0});
    let [setUploaded] = useState(false)

return (
  <>
    <div className="blog-upload">
      <form onSubmit={(e: React.FormEvent)=>{
        e.preventDefault();
        data.push(blog);
        let toLocStor:Object = blog

        imgFileToBase64(blog.thumbnail)
            .then(base64=>{
              toLocStor= {...toLocStor, thumbnail: base64}
            })
            .catch(e=>{
              console.log(e);
              toLocStor= {...toLocStor, thumbnail: ''}              
            })
            .finally(()=>{
              localStorage.setItem(generateUID(), JSON.stringify(toLocStor))
              setBlog({uid: Date.now(), authName: '', blogTitle: '', desc: '', thumbnail: null, webUrl: '', views:0});
              setUploaded(true)
            })
        
      }}>
        <label htmlFor="author">Author Name:</label>
        <input type="text" id="author" name="author" 
        value={blog.authName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
          setBlog({...blog, authName: e.target.value})
        }}
        />

        <label htmlFor="title">Blog Title:</label>
        <input type="text" id="title" name="title" 
        value={blog.blogTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
          setBlog({...blog, blogTitle: e.target.value})
        }}
        />

        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          
          onChange={e=>{
            if (e.target.files && e.target.files[0]) {
              setBlog({...blog, thumbnail: e.target.files[0]});
            }
          }}
        />

        <label htmlFor="website">Website URL:</label>
        <input type="text" id="website" name="website" 
        value={blog.webUrl}
        onChange={e=>{
            setBlog({...blog, webUrl: e.target.value})
        }}/>

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" 
        value={blog.desc}
        onChange={e=>{
            setBlog({...blog, desc: e.target.value})
        }}></textarea>

        <button type='submit'>Upload Blog</button>
      </form>
    </div>
  </>
);
}
