import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { message } from '../Models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor( private firestore: Firestore) { }

  setMessage(mesage: message){
    const messageRef = collection(this.firestore, 'messages' );
    return addDoc(messageRef, mesage);
  }
}
