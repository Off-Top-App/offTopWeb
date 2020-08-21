import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public fireAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth
  ) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
    })
  }

  async oAuthProvider(provider) {
    try {
      const res = await this.fireAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['home-page']);
      });
    }
    catch (error) {
      window.alert(error);
    }
  }

  async signInWithGoogle() {
    try {
      const res = await this.oAuthProvider(new auth.GoogleAuthProvider());
      console.log('Successfully logged in!');
    }
    catch (error) {
      console.log(error);
    }
  }
 
  async signOut() {
    await this.fireAuth.signOut();
    this.router.navigate(['login']);
  }

}