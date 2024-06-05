import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewMobileComponent } from './view-mobile/view-mobile.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'add-mobile', component: AddMobileComponent },
{ path: 'view-mobile', component: ViewMobileComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
