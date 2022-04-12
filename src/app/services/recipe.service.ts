import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { IRecipe } from '../models/recipe'


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // get currentRecipe$(): Observable<IRecipe | null> {
  //   return this.authService.currentUser$.pipe(
  //     switchMap(user => {

  //       if (!user?.uid) {
  //         return of(null)
  //       }

  //       const ref = doc(this.firestore, 'users', user?.uid)
  //       return docData(ref) as Observable<ProfileUser>
  //     })
  //   )
  // }

  constructor(private angularFirestore: AngularFirestore) { }

  getRecipe() {
    return this.angularFirestore
      .collection('recipes')
      .snapshotChanges();
  }

  getRecipeById(id: any) {
    return this.angularFirestore
      .collection('recipes')
      .doc(id)
      .valueChanges()
  }

  createRecipe(recipe: IRecipe) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('recipes')
        .add(recipe)
        .then((response) => {
          console.log(response);
        },
          (error) => {
            reject(error)
          })
    })

  }

  updateRecipe(recipe: IRecipe, id: any) {
    return this.angularFirestore
      .collection('recipes')
      .doc(id)
      .update({
        name: recipe.name,
        prepartionTime: recipe.prepartionTime,
        description: recipe.description,
      });
  }

  deleteRecipe(recipe: any) {
    return this.angularFirestore
      .collection('recipes')
      .doc(recipe.id)
      .delete();
  }


}
