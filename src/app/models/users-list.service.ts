import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Client } from './user.interface';

@Injectable()
export class UsersListService {
  USER_API: string = 'api/clients';
  private clients: Client[] = [];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Client[]> {
    return this.http.get<Client[]>(this.USER_API);
  }

  getUser(id:number | string): Observable<Client> {
    return this.http.get<Client>(`${this.USER_API}/${id}`)

  }
}
