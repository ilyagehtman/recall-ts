export type Product = {
  id: string

  type: { name: string, markup: number }
  order: { name: string, markup: number }

  size: { name: string }
  color: { name: string, hex: string }
  laceColor?: { name: string, hex: string }
  
  finishedPicture?: string
}