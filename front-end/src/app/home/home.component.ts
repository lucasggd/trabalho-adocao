import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  list: any[] = [];

  constructor(public dialog: MatDialog, private service: AnimalService) {
    this.service.findAll().subscribe((data) => {
      this.list = data;
    });
  }

  openDialog(obj: any): void {
    this.dialog.open(DetailsComponent, {
      width: '40%',
      height: 'auto',
      data: { obj: obj },
    });
  }
}
