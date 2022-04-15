import { Component, OnInit } from '@angular/core';


import { RecipeService } from 'src/app/services/recipe.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { concatMap, finalize } from 'rxjs';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  imgSrc: string = 'assets/images/image-placeholder.png';
  selectedImage: any = null;

  public recipeForm!: FormGroup

  constructor(
    public recipeService: RecipeService,
    public formBuilder: FormBuilder,
    public router: Router,
    private imageUploadService: ImageUploadService,
  ) {
    this.recipeForm = this.formBuilder.group({
      name: [''],
      prepartionTime: [''],
      description: [''],
      imageUrl: [''],
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
    // var filePath = `images/recipes/${this.selectedImage.name}`;

    // this.imageUploadService.uploadImage(this.selectedImage, filePath).pipe(
    //   concatMap((photoURL) =>
    //     this.recipeService.updateRecipe({ id: user.uid, photoURL }))
    // ).subscribe()
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = 'assets/images/image-placeholder.png';
      this.selectedImage = null;
    }
  }

}
