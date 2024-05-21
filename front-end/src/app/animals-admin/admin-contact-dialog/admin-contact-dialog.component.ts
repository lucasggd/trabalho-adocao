import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-contact-dialog',
  templateUrl: './admin-contact-dialog.component.html',
  styleUrls: ['./admin-contact-dialog.component.css'],
})
export class AdminContactDialogComponent {
  public contact: any;

  constructor(
    public dialogRef: MatDialogRef<AdminContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contact: any }
  ) {
    this.contact = data?.contact;
  }
}
