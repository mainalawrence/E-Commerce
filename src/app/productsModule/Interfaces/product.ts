export interface Product {
    id?:string,
    name?:string,
    cost?:number,
    brand?:string,
    description?:string,
    Features?:string[],
    Specifications?:string[],
    images?:string[] | File,
    type?:string
}
