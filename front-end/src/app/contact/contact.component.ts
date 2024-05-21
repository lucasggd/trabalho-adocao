import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { SnackbarComponent } from '../animals-admin/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, Validators.required),
    message: new FormControl(null, Validators.required),
  });

  constructor(
    private contact: ContactService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  save(): void {
    this.contact.newContact(this.form.getRawValue()).subscribe((data) => {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 4 * 1000,
        panelClass: ['bg-panel'],
      });
      this.form.reset();
      this.router.navigate(['home']);
    });
  }
}
