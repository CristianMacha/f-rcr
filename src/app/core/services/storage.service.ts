import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly path = 'orders';
  constructor(private storage: AngularFireStorage) { }

  uploadOrderFile(fileName: string, file: File) {
    return this.storage.ref(`${this.path}/${fileName}`).put(file);
  }

  getUrl(fileName: string) {
    return this.storage.ref(`${this.path}/${fileName}`).getDownloadURL();
  }
}
