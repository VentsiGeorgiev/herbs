import { Component, OnInit } from '@angular/core';

import { RecipeService } from 'src/app/services/recipe.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  public editForm!: FormGroup
  postRef: any

  constructor(
    public recipeService: RecipeService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      prepartionTime: [''],
      description: [''],
    })
  }

  get name() {
    return this.editForm.get('name');
  }
  get prepartionTime() {
    return this.editForm.get('prepartionTime');
  }
  get description() {
    return this.editForm.get('description');
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id).subscribe(res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        name: [this.postRef.name],
        prepartionTime: [this.postRef.prepartionTime],
        description: [this.postRef.description],
      })

    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.recipeService.updateRecipe(this.editForm.value, id);
    this.router.navigate(['recipe'])
  }

}
