import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PSForumComponent } from './components/ps-forum/ps-forum.component';
import { PSForumItemComponent } from './components/ps-forum-item/ps-forum-item.component';
import { PSForumDetailsComponent } from './components/ps-forum-details/ps-forum-details.component';
import { HttpClientModule} from "@angular/common/http";
import {PSDataService} from "./service/ps-data.service";

@NgModule({
  declarations: [
    AppComponent,
    PSForumComponent,
    PSForumItemComponent,
    PSForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PSDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
