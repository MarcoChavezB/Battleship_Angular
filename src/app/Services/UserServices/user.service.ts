import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLogin, statusInterface} from "@models/User";
import {environment} from "@environments/environments";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient
  ) { }

  login(data: UserLogin){
    return this.http.post<UserLogin>(environment.loginURL, data)
  }

  logoutuser(): Observable<statusInterface>{
    return this.http.get<statusInterface>(environment.logoutURL)
  }

}
