import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import {HttpClientModule} from "@angular/common/http";
import { SinglePostComponent } from './single-post/single-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordPipe } from './password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    SinglePostComponent,
    PasswordPipe,
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
