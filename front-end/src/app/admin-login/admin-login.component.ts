import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  public fail = false;

  public form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private service: LoginService, public router: Router) {
    if (localStorage.getItem('token') != null)
      this.router.navigate(['records/animals']);
  }

  login(): void {
    this.service.login(this.form.getRawValue()).subscribe((data) => {
      if (data && data.t) {
        localStorage.setItem('token', data.t);
        location.reload();
        return;
      }

      this.fail = true;
    });
  }
}
