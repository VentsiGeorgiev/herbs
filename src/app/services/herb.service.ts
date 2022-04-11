import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { IHerb } from '../models/herb';
import { from, Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HerbService {

  get currentHerb$(): Observable<IHerb | null> {
    return this.authService.currentUser$.pipe(
      switchMap(herb => {

        if (!herb?.uid) {
          return of(null)
        }

        const ref = doc(this.firestore, 'herbInf', herb?.uid)
        return docData(ref) as Observable<IHerb>
      })
    )
  }

  constructor(private firestore: Firestore, private authService: AuthService) { }

  addHerb(herb: IHerb) {
    const herbRef = collection(this.firestore, 'herbs');
    return from(addDoc(herbRef, herb));
  }

  updateHerb(herb: IHerb): Observable<any> {
    const ref = doc(this.firestore, 'herbs');
    // const ref = doc(this.firestore, 'herbs', user?.uid);
    return from(updateDoc(ref, { ...herb }))
  }

}
