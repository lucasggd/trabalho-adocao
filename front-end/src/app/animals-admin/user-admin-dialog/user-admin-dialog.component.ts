import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { AdminAnimalRemoveComponent } from '../admin-animal-remove/admin-animal-remove.component';

@Component({
  selector: 'app-user-admin-dialog',
  templateUrl: './user-admin-dialog.component.html',
  styleUrls: ['./user-admin-dialog.component.css'],
})
export class UserAdminDialogComponent {
  public form = new FormGroup({
    id: new FormControl(null),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  update = false;

  constructor(
    private service: AdminService,
    public dialogRef: MatDialogRef<AdminAnimalRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any }
  ) {
    if (data.user) {
      this.update = true;
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.setValue(data.user[key]);
      });
    } else {
      this.update = false;
      this.form.reset();
    }
  }

  save(): void {
    if (this.update) {
      this.service.updateUser(this.form.getRawValue()).subscribe((data) => {
        this.dialogRef.close();
      });
    } else {
      this.service.saveUser(this.form.getRawValue()).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }
}
