import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-animal-remove',
  templateUrl: './admin-animal-remove.component.html',
  styleUrls: ['./admin-animal-remove.component.css'],
})
export class AdminAnimalRemoveComponent {
  public animal: any = null;

  constructor(
    public dialogRef: MatDialogRef<AdminAnimalRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { animal: any },
    public service: AdminService
  ) {}

  ngOnInit(): void {
    this.animal = this.data.animal;
  }

  delete(): void {
    if (this.animal.animalName) {
      this.service.delete(this.animal.id).subscribe((data) => {
        this.animal = null;
        this.dialogRef.close();
      });
    } else if (this.animal.username) {
      this.service.deleteUser(this.animal.id).subscribe((data) => {
        this.animal = null;
        this.dialogRef.close();
      });
    } else {
      this.service.deleteContact(this.animal.id).subscribe((data) => {
        this.animal = null;
        this.dialogRef.close();
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
