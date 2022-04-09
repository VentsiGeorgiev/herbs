import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { concatMap } from 'rxjs';
import { ProfileUser } from 'src/app/models/user-profile';
import { AuthService } from 'src/app/services/auth.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
import { UsersService } from 'src/app/services/users.service';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$

  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user })
      })
  }

  uploadImage(event: any, user: ProfileUser) {
    this.imageUploadService.uploadImage(event.target.files[0], `images/profile/${user.uid}`).pipe(
      this.toast.observe({
        success: 'Успешно зареждане на снимката!',
        loading: 'Зареждане...',
        error: 'Грешка при качване на снимката'
      }),
      concatMap((photoURL) =>
        this.usersService.updateUser({ uid: user.uid, photoURL }))
    ).subscribe();
  }

  saveProfile() {
    const profileData = this.profileForm.value;
    this.usersService.updateUser(profileData).pipe(
      this.toast.observe({
        loading: 'Зареждане...',
        success: 'Успешно запазване на информацията',
        error: 'Грешка при запазване на информацията'
      })
    ).subscribe()
  }

}
