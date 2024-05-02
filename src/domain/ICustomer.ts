import { IDeliveryMethod } from './Vars.ts'

export interface ICustomer {
  email: string;
  phone: string;
  city: string;
  house: string;
  street: string;
  apart: string;
  comment: string;
  fullName: string;
  deliveryMethod: IDeliveryMethod;
}