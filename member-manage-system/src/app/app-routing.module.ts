import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [
  { path:'signup', component: SignupComponent },
  { path:'members', component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
