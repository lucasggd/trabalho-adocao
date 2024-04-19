import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  obj: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.obj = data.obj;
    console.log(this.obj);
  }
}
