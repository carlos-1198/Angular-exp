import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser(email: string, password: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  logIn(email: string, password: string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logOut(){
    return this.angularFireAuth.signOut();
  }

  hasUser(){
    console.log('entra en el service' + this.angularFireAuth.authState._isScalar);
    return this.angularFireAuth.authState;
  }
}
