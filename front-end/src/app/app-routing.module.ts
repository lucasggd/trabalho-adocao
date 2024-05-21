import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AnimalsAdminComponent } from './animals-admin/animals-admin.component';
import { AdminGuard } from './guard/admin.guard';
import { ContactsAdminComponent } from './animals-admin/contacts-admin/contacts-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: AdminLoginComponent },
  {
    path: 'records/animals',
    component: AnimalsAdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'records/contacts',
    component: ContactsAdminComponent,
    canActivate: [AdminGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
