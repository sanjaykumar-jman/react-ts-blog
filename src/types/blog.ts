export type blogTemplate = {
    uid: number
    authName: string,
    blogTitle: string,
    thumbnail: File | null,
    webUrl : string,
    desc : string
    views: number
}
export type blogStat = {
    views: number
}
export type blogList = blogTemplate[]