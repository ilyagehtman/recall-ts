export type Product = {
    id?: string
    imgSrc?: string
    type: { name: string, markup: number }
    order: { name?: string, markup: number }
    size: { name: string, markup: number }
    color: { name: string, hex: string }
}