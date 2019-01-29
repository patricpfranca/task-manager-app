import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public signOutUser() {
    this.authService.signOut()
      .subscribe(
        () => this.router.navigate(['/sign-in'])
      );
  }
}
