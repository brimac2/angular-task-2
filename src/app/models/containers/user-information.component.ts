import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../user.interface';
import { UsersListService } from '../users-list.service';

@Component({
  selector: 'user-information',
  template: `
    <ng-container *ngFor="let client of clients | async">
      <div *ngIf="client.first_name">
        <div>
          <a [routerLink]="['/user', client.id]"> <button>More info</button></a>
        </div>
        {{ client.first_name }}
      </div>
    </ng-container>
    <div>
      <a routerLink='/add'> <button>Add new client</button></a>
    </div>
  `,
})
export class UserInformationComponent {
  clients?: Observable<Client[]>;

  constructor(private userService: UsersListService) {}

  ngOnInit() {
    this.clients = this.userService.getUsers();
  }
}
