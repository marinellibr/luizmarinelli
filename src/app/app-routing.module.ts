import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "home"},
  {path: "home", component: HomepageComponent},
  {path: "social", component: SocialComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
