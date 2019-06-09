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
  constructor(private searchService:SearchService ){}

}
