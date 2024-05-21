import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { AdminAnimalDialogComponent } from '../admin-animal-dialog/admin-animal-dialog.component';
import { AdminAnimalRemoveComponent } from '../admin-animal-remove/admin-animal-remove.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AdminContactDialogComponent } from '../admin-contact-dialog/admin-contact-dialog.component';

@Component({
  selector: 'app-contacts-admin',
  templateUrl: './contacts-admin.component.html',
  styleUrls: ['./contacts-admin.component.css'],
})
export class ContactsAdminComponent {
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
    this.service.findAllContact().subscribe((data) => {
      this.datatable = data;
    });
  }

  success(): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 4 * 1000,
      panelClass: ['bg-panel'],
    });
  }

  openDialog(contact?: any) {
    const dialogRef = this.dialog.open(AdminContactDialogComponent, {
      data: { contact: contact },
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
