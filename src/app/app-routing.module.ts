import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserAddComponent } from './models/containers/user-add.component';
import { UserInformationComponent } from './models/containers/user-information.component';
import { UserNotFoundCompnent } from './models/containers/user-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch:'full'},
  {path: 'user/:id', component: MainComponent},
  {path:'users', component:UserInformationComponent },
  {path: 'add', component: UserAddComponent},
  {path: '**', component: UserNotFoundCompnent}


  ]

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
