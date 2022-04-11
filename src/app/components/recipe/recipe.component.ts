import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  Recipes!: IRecipe[]

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipe().subscribe((res) => {
      this.Recipes = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as IRecipe)
        }
      })
    })
  }

  deleteRow(recipe: any) {
    this.recipeService.deleteRecipe(recipe)
  }

}
