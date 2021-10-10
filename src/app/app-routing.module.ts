import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";
import {SinglePostComponent} from "./single-post/single-post.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "posts/:id",
    component: SinglePostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
