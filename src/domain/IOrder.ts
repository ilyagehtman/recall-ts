import { Product } from './Product.ts'
import { ICustomer } from './ICustomer.ts'
import { IProduct } from './IProduct.ts'

export interface IOrder {
  customer: ICustomer;
  products: IProduct[];
}