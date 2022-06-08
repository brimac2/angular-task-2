import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './models/user.interface';
import { UsersListService } from './models/users-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
//  public clients?: Client[];
 clients?: Observable<Client[]>;

  constructor(private userService: UsersListService) {}

  ngOnInit() {
    this.clients = this.userService.getUsers()
      // .getUsers()
      // .subscribe((data: Client[]) => (this.clients = data));
  }
}
