import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { AboutComponent } from './componenti/about/about.component';
import { SingupComponent } from './componenti/singup/singup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path:'singup',component:SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
