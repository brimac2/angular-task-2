import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../user.interface";
import { UsersListService } from "../users-list.service";

@Component({
  selector: 'user-information',
  template: `
<ng-container *ngFor="let client of clients |async as clients">
  <div *ngIf="client.first_name">
    <div><a [routerLink] = "['/user', client.id]">
      <button>Add</button></a>
    </div>


  {{client.first_name}}</div>
</ng-container>
  `

})
export class UserInformationComponent{
  clients?: Observable<Client[]>;

  constructor(private userService: UsersListService) { }

ngOnInit() {
  this.clients = this.userService.getUsers()
}
}
