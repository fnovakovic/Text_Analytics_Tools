import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {ConfigurationComponent} from "./components/configuration/configuration.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "configuration",
    component: ConfigurationComponent
  },
  {
    path: "posts",
    component: PostListComponent,
  },
  {
    path: "posts/:id",
    component: SinglePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
