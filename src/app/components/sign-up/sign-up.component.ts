import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }

    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator() })

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get name() {
    return this.signUpForm.get('name')
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password() {
    return this.signUpForm.get('email')
  }

  get confirmPassword() {
    return this.signUpForm.get('email')
  }

  submit() {
    if (!this.signUpForm.valid) {
      return
    }

    const { name, email, password } = this.signUpForm.value;
    this.authService.signUp(name, email, password).pipe(
      this.toast.observe({
        success: 'Успешно създадохте нов профил!',
        loading: 'Зареждане...',
        error: ({ message }) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }
}