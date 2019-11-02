import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitPageComponent } from './components/git-page/git-page.component';



const routes: Routes = [
  {path:"git", component:GitPageComponent},
  {path:"", pathMatch:"full",redirectTo:"git"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
