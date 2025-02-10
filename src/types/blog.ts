export interface blogTemplate {
    uid: number
    authName: string,
    blogTitle: string,
    thumbnail: File | null,
    webUrl : string,
    desc : string
    views: number
}
export interface blogStat {
    views: number
}
export type blogList = blogTemplate[]