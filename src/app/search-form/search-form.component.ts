import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() searchUser = new EventEmitter<string>();
  username:string;
  constructor(private searchService: SearchService) {
    console.log("abcddhhfhh")
  }

  search() {

   this.searchUser.emit(this.username);

 }

  ngOnInit() {
  }

}
