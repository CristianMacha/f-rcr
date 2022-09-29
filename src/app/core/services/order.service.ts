import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {OrderInterface} from "@core/interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly path = 'orders';
  constructor(private afs: AngularFirestore) {
  }

  createNewOrder(order: OrderInterface) {
    return this.afs.collection(this.path).add(order);
  }

  getOrders(): Observable<OrderInterface[]> {
    return this.afs.collection<OrderInterface>(this.path, ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }
}
