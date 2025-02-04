import './blog-upload.scss'
import { useBlogContext } from '../../context/BlogContext';
import * as types from '../../types/blog';
import React from 'react';

export default function BlogUpload() {
    const {data} = useBlogContext();
    const [blog, setBlog] = React.useState<types.blogTemplate>({} as types.blogTemplate);

return (
  <>
    <div className="blog-upload">
      <form onSubmit={(e: React.FormEvent)=>{
        e.preventDefault();
        data.push(blog);
        
      }}>
        <label htmlFor="author">Author Name:</label>
        <input type="text" id="author" name="author" required 
        value={blog.authName}
        onChange={e=>{
            blog.authName = e.target.value;
        }}/>

        <label htmlFor="title">Blog Title:</label>
        <input type="text" id="title" name="title" required 
        value={blog.blogTitle}
        onChange={e=>{
            blog.blogTitle = e.target.value;
        }}/>

        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          required
// value={1}
          onChange={e=>{
            blog.thumbnail = e.target.files![0];
          }}
        />

        <label htmlFor="website">Website URL:</label>
        <input type="url" id="website" name="website" 
        value={blog.webUrl}
        onChange={e=>{
            blog.webUrl = e.target.value
        }}/>

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required 
        value={blog.webUrl}
        onChange={e=>{
            blog.desc = e.target.value
        }}></textarea>

        <button type='submit'>Upload Blog</button>
      </form>
    </div>
  </>
);
}
