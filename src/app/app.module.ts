import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchService } from './services/search.service';

import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
