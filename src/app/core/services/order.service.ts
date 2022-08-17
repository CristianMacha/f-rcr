import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {OrderInterface} from "@core/interfaces";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private afs: AngularFirestore) {
  }

  createNewOrder(order: OrderInterface) {
    return this.afs.collection('order').add(order);
  }

  getOrders() {
    return this.afs.collection('order', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }
}
