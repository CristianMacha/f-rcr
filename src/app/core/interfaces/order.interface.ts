import {ProductInterface} from "./product.interface";

export interface OrderInterface {
  code: string;
  contact: ContactInterface,
  products: ProductInterface[],
  createdAt: string,
}

export interface ContactInterface {
  fullName: string,
  email: string,
  city: string,
  message: string,
  file?: string,
}
