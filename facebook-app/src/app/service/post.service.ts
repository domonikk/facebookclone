import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { User } from '@firebase/auth-types';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators'; 
import firebase from 'firebase/app'; 
import 'firebase/auth';





@Injectable({
  providedIn: 'root'
})
export class PostService { 
  currentUser: User;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) { 
    
    this.afAuth.authState.subscribe( user => this.currentUser= user);
  }  

  getAllPosts(): Observable<any> {
    return this.afs.collection<any>('posts', ref => ref.orderBy('time', "desc")).snapshotChanges() //to get get pots and order by time getting their id using snapshotchanges 
    .pipe( 
      map( actions => { 
        return actions.map(item=>{ //loops through items and returns item with id as is 
          return {
            id: item.payload.doc.id, 
            ...item.payload.doc.data(),
          };
        });
      })
    );
  } 

  postMessage (message:string, ownerName:string, otherItem): void{
    this.afs.collection('posts').add({
      message, 
      title:ownerName, 
      user_id: this.currentUser.uid,
      time: firebase.firestore.FieldValue.serverTimestamp(), 
      ...otherItem
    }).then(res => console.log (res)).catch(err => console.log(err));
  }

}
