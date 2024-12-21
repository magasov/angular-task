import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
