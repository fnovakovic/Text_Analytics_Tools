import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import {HttpClientModule} from "@angular/common/http";
import { SinglePostComponent } from './components/single-post/single-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {PasswordPipe} from "./pipes/password.pipe";
import {AppComponent} from "./components/app/app.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    SinglePostComponent,
    PasswordPipe,
    ConfigurationComponent,
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
