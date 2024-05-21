import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { AnimalService } from 'src/app/services/animal.service';
import { AdminAnimalRemoveComponent } from '../admin-animal-remove/admin-animal-remove.component';

@Component({
  selector: 'app-admin-animal-dialog',
  templateUrl: './admin-animal-dialog.component.html',
  styleUrls: ['./admin-animal-dialog.component.css'],
})
export class AdminAnimalDialogComponent {
  public form = new FormGroup({
    id: new FormControl(null),
    email: new FormControl(null, [Validators.required, Validators.email]),
    animalName: new FormControl(null, Validators.required),
    color: new FormControl(null, Validators.required),
    years: new FormControl(0, Validators.required),
    months: new FormControl(0, Validators.required),
    days: new FormControl(0, Validators.required),
    city: new FormControl(null, Validators.required),
    about: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    other: new FormControl(null),
    status: new FormControl(null),
    castrate: new FormControl(false),
    vaccines: new FormControl(false),
    phoneTutor: new FormControl(null, Validators.required),
    img: new FormControl(null, Validators.required),
  });

  update = false;

  constructor(
    private service: AdminService,
    public dialogRef: MatDialogRef<AdminAnimalRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { animal: any }
  ) {
    if (data.animal) {
      this.update = true;
      Object.keys(this.form.controls).forEach((key) => {
        this.form.get(key)?.setValue(data.animal[key]);
      });
    } else {
      this.update = false;
      this.form.reset();
      this.form.get('years')?.setValue(0);
      this.form.get('months')?.setValue(0);
      this.form.get('days')?.setValue(0);
      this.form.get('castrate')?.setValue(false);
      this.form.get('vaccines')?.setValue(false);
    }
  }

  save(): void {
    if (this.update) {
      this.service.update(this.form.getRawValue()).subscribe((data) => {
        this.dialogRef.close();
      });
    } else {
      this.service.save(this.form.getRawValue()).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }
}
