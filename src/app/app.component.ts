import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'herbs';

  user$ = this.usersService.currentUserProfile$

  constructor(private authService: AuthService, private router: Router, private usersService: UsersService) {

  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
