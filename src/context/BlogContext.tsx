import React, { createContext, useContext } from "react";
import * as types from "../types/blog";

type BlogContextType = {
    data: types.blogList
    setBlogContext: React.Dispatch<React.SetStateAction<types.blogList>>
}

const BlogContext = createContext({} as BlogContextType);

export function useBlogContext() {
    return useContext(BlogContext);
}

export function BlogProvider({children}: {children: React.ReactNode}){
    let [blogs, setBlogs] = React.useState<types.blogList>([]);

return<>
    <BlogContext.Provider value={{data: blogs, setBlogContext: setBlogs}}>
        {children}
    </BlogContext.Provider>
</>
}

