import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { AdminAnimalRemoveComponent } from '../admin-animal-remove/admin-animal-remove.component';
import { UserAdminDialogComponent } from '../user-admin-dialog/user-admin-dialog.component';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
})
export class UserAdminComponent {
  datatable: any = [];

  constructor(
    public dialog: MatDialog,
    private service: AdminService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  openDialog(user?: any) {
    const dialogRef = this.dialog.open(UserAdminDialogComponent, {
      data: { user: user },
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.success();
      this.refresh();
    });
  }

  refresh(): void {
    this.service.findAllUser().subscribe((data) => {
      this.datatable = data;
    });
  }

  success(): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 4 * 1000,
      panelClass: ['bg-panel'],
    });
  }

  removeDialog(user: any) {
    const dialogRef = this.dialog.open(AdminAnimalRemoveComponent, {
      data: { animal: user },
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.success();
      this.refresh();
    });
  }
}
