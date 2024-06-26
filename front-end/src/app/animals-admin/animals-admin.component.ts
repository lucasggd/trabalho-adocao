import { Component } from '@angular/core';
import { AdminAnimalDialogComponent } from './admin-animal-dialog/admin-animal-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AnimalService } from '../services/animal.service';
import { AdminService } from '../services/admin.service';
import { AdminAnimalRemoveComponent } from './admin-animal-remove/admin-animal-remove.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Component({
  selector: 'app-animals-admin',
  templateUrl: './animals-admin.component.html',
  styleUrls: ['./animals-admin.component.css'],
})
export class AnimalsAdminComponent {
  datatable: any = [];

  constructor(
    public dialog: MatDialog,
    private service: AdminService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.service.findAll().subscribe((data) => {
      this.datatable = data;
    });
  }

  success(): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 4 * 1000,
      panelClass: ['bg-panel'],
    });
  }

  openDialog(animal?: any) {
    const dialogRef = this.dialog.open(AdminAnimalDialogComponent, {
      data: { animal: animal },
      width: '80%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.success();
      this.refresh();
    });
  }

  removeDialog(animal: any) {
    const dialogRef = this.dialog.open(AdminAnimalRemoveComponent, {
      data: { animal: animal },
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.success();
      this.refresh();
    });
  }
}
