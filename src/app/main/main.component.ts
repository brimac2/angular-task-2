import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Client } from '../models/user.interface';
import { UsersListService } from '../models/users-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersListService
  ) {}


  clients$?: Observable<Client | undefined>;

  ngOnInit() {



  this.clients$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.service.getUsers().pipe(
          map((users) => {
            return users.find((user) => {
              user.id.toString() === params.get('id')
            })
          })
        )
      })
    );
  }
  getClients() {
    this.router.navigate(['/users']);
  }

}
