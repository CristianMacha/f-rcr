import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) { }

  uploadOrderFile(fileName: string, file: File) {
    return this.storage.ref(`orders/${fileName}`).put(file);
  }

  getUrl(fileName: string) {
    return this.storage.ref(`orders/${fileName}`).getDownloadURL();
  }

  uploadFormFile(fileName: string, file: File) {
    return this.storage.ref(`forms/${fileName}`).put(file);
  }

  getFormUrl(fileName: string) {
    return this.storage.ref(`forms/${fileName}`).getDownloadURL();
  }
}
