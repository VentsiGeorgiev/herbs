import { Component, OnInit } from '@angular/core';


import { RecipeService } from 'src/app/services/recipe.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  public recipeForm!: FormGroup

  constructor(
    public recipeService: RecipeService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.recipeForm = this.formBuilder.group({
      name: [''],
      prepartionTime: [''],
      description: [''],
    })
  }

  get name() {
    return this.recipeForm.get('name');
  }
  get prepartionTime() {
    return this.recipeForm.get('prepartionTime');
  }
  get description() {
    return this.recipeForm.get('description');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.recipeService.createRecipe(this.recipeForm.value)
    this.router.navigate(['recipe'])
  }

}
