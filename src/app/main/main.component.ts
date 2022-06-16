import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client } from '../models/user.interface';
import { UsersListService } from '../models/users-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsersListService,


  ) {}

  clients$?: Observable<Client | undefined>;

  ngOnInit() {
    this.clients$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getUser(params.get('id')!))
    );



    }

  }

