import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environments";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameInstanceService {

  private queueGameURL = environment.queueGameURL;
  private joinRandomGameURL = environment.joinRandomGameURL;
  private endGameURL = environment.endGameURL;

  constructor(
    private http: HttpClient
  ) {
  }

  queueGame(): Observable<any> {
    return this.http.post<any>(this.queueGameURL, {});
  }

  joinRandomGame(): Observable<any> {
    return this.http.put<any>(this.joinRandomGameURL, {});
  }

  endGame(): Observable<any> {
    return this.http.put<any>(this.endGameURL, {});
  }

}
