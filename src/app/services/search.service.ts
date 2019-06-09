import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private username = "Apiyo4";
  constructor(private http: HttpClient) {
  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
  }
}
