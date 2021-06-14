import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PSForumComponent} from "./components/ps-forum/ps-forum.component";
import {PSForumItemComponent} from "./components/ps-forum-item/ps-forum-item.component";
import {PSForumDetailsComponent} from "./components/ps-forum-details/ps-forum-details.component";

const routes: Routes = [{
  path:'',
  component:PSForumComponent
},{
  path:'post/:id',
  component:PSForumDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
