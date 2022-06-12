import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListService } from './models/users-list.service';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './models/containers/user-add.component';
import { UserInformationComponent } from './models/containers/user-information.component';
import { UserNotFoundCompnent } from './models/containers/user-not-found.component';
import { MainComponent } from './main/main.component';





@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserInformationComponent,
    UserNotFoundCompnent,
    MainComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [UsersListService, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
