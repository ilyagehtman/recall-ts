import { ICategory, IColor, ILaceColor, ISize, IType } from './Vars.ts'

export interface IProduct {
  id: string
  category: ICategory
  type: IType
  size: ISize
  color: IColor
  laceColor: ILaceColor
  canvasImage?: string
}