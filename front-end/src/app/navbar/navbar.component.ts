import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public logged = false;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.logged = localStorage.getItem('token') != null;
  }

  login(): void {
    if (this.logged) this._router.navigate(['records/animals']);
    else this._router.navigate(['login']);
  }

  logout(): void {
    this._router.navigate(['home']);
    this.logged = false;
    localStorage.removeItem('token');
  }
}
