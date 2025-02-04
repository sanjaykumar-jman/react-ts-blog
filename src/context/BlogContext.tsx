import React, { createContext, useContext } from "react";
import * as types from "../types/blog";

const BlogContext = createContext({} as {data: types.blogList});

export function useBlogContext() {
    return useContext(BlogContext);
}

export function BlogProvider({children}: {children: React.ReactNode}){
    let [blogs, setBlogs] = React.useState<types.blogList>([]);

return<>
    <BlogContext.Provider value={{data: blogs}}>
        {children}
    </BlogContext.Provider>
</>
}
