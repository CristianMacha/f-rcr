import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {AuthenticationInterface} from "@core/interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AngularFireAuth) {
  }

  authWithEmailAndPassword(auth: AuthenticationInterface) {
    return this.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }

  getUserAuth() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
  }
}
