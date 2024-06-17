import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { VisualizationsPageComponent } from './visualizations-page/visualizations-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-page', pathMatch: 'full' },
  { path: 'search-page', component: SearchPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'visualizations', component: VisualizationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
