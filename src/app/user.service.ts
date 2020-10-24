import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "/assets/data/user.json";
  constructor(private http: HttpClient) { }

  getUser(): Observable<UserModel> {
    return this.http.get<UserModel>(this.url)
  }
}
