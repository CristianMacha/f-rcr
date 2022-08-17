import {WooInterface} from "./woo.interfaces";

export interface OrderInterface {
  contact: ContactInterface,
  woo: WooInterface
  createdAt: string,
}

export interface ContactInterface {
  fullName: string,
  email: string,
  city: string,
  message: string,
  photo?: string,
}
