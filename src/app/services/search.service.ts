import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { HttpClient } from "@angular/common/http"
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl= 'https://api.github.com/users/';
  username = "Apiyo4";
  constructor(private http: HttpClient) {
  }
  getUser() {
    return this.http.get<User>(this.apiUrl + this.username + "?access_token=" + environment.access_token);
  }
}
