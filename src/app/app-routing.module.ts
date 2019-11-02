import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GitPageComponent } from './components/git-page/git-page.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';



const routes: Routes = [
  {path:"git", component:GitPageComponent},
  {path:"search", component:SearchDetailComponent},

  {path:"", pathMatch:"full",redirectTo:"git"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
