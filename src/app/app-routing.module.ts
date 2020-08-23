import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './component/log-in/log-in.component';
import { HomePageComponent } from './component/home-page/home-page.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LogInComponent },
{ path: 'home-page', component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
