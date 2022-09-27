import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private readonly path = 'forms';

  constructor(private afs: AngularFirestore) { }

  createForm(formRcr: any) {
    return this.afs.collection(this.path).add(formRcr);
  }

  getForms() {
    return this.afs.collection(this.path, ref => ref.orderBy('createdAt', 'desc')).valueChanges();
  }
}
