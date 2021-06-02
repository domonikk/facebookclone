import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import firebase from 'firebase/app'; 
import 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService { 
private userData: Observable<firebase.User>; 


private currentUser: UserData; 
private currentUser$ = new BehaviorSubject<UserData>(null);


  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) { 
                
               this.userData = afAuth.authState; 

              this.userData.subscribe(user => { 
                 if (user){ 
                  this.afs.collection<UserData>('users') 
                  .doc<UserData>(user.uid) 
                  .valueChanges() 
                  .subscribe(currentUser => {
                    this.currentUser = currentUser;
                    this.currentUser$.next(currentUser);
                 }); 
                }
              });
            }
} 

export interface UserData{
  firstName: string; 
  lastName: string; 
  avatar: string; 
  email: string; 
  id: string;
};
