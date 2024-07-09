export interface Project {
    id: number,
    img: string,
    title: string,
    extract: string,
    slug: string,
    description: string,
    images: Array<string|null>
}