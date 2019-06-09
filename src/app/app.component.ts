import { Component } from '@angular/core';
import { User } from './user';
import { Repos } from './repos';
import { SearchService } from './services/search.service';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  repos:any;
  constructor(private searchService:SearchService ){
    this.searchService.getUser().subscribe(user => {
    this.user = user;
  })
  this.searchService.getRepos().subscribe(repos => {
  this.repos = repos;
})
  }

}
