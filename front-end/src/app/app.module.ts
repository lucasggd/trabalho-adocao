import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AnimalsAdminComponent } from './animals-admin/animals-admin.component';
import { DetailsComponent } from './home/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AdminAnimalDialogComponent } from './animals-admin/admin-animal-dialog/admin-animal-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAnimalRemoveComponent } from './animals-admin/admin-animal-remove/admin-animal-remove.component';
import { SnackbarComponent } from './animals-admin/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactsAdminComponent } from './animals-admin/contacts-admin/contacts-admin.component';
import { AdminContactDialogComponent } from './animals-admin/admin-contact-dialog/admin-contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AdminLoginComponent,
    AnimalsAdminComponent,
    DetailsComponent,
    AdminAnimalDialogComponent,
    AdminAnimalRemoveComponent,
    SnackbarComponent,
    ContactsAdminComponent,
    AdminContactDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
