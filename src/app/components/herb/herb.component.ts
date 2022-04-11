import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { HerbService } from 'src/app/services/herb.service';
import { Storage } from '@angular/fire/storage';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { IHerb } from 'src/app/models/herb';
import { concatMap } from 'rxjs';



@Component({
  selector: 'app-herb',
  templateUrl: './herb.component.html',
  styleUrls: ['./herb.component.css']
})
export class HerbComponent implements OnInit {



  imgSrc: string = 'assets/images/image-upload.png';
  selectedImage: any = null;
  isSubmitted: boolean = false;

  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private herbService: HerbService,
    private storage: Storage,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }


  herbForm = new FormGroup({
    herbName: new FormControl('', Validators.required),
    description: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
  });

  herb$ = this.herbForm.value

  get herbName() {
    return this.herbForm.get('herbName');
  }

  get imageUrl() {
    return this.herbForm.get('imageUrl');
  }


  // saveHerb() {
  //   const herbData = this.herbForm.value;
  //   this.herbService.addHerb(herbData)
  //   // this.herbService.addHerb(herbData).then(() => this.herbForm.reset()).then(() => this.router.navigate(['/herbs']))
  // }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = 'assets/images/image-upload.png';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: any, herb: IHerb) {

    this.imageUploadService.uploadImage(this.selectedImage, `images/herbs/${new Date().getTime()}_${formValue.herbName}`).pipe(
      this.toast.observe({
        success: 'Успешно зареждане на снимката!',
        loading: 'Зареждане...',
        error: 'Грешка при качване на снимката'
      })

    ).subscribe();
    this.resetForm();
  }

  get formControls() {
    return this.herbForm['controls']
  }

  resetForm() {
    this.herbForm.reset();
    this.imgSrc = 'assets/images/image-upload.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
