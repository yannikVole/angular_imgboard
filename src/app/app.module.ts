import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreadViewComponent } from './thread-view/thread-view.component';
import { ThreadComponent } from './thread-view/thread/thread.component';
import { CommentViewComponent } from './thread-view/thread/comment-view/comment-view.component';
import { CommentComponent } from './thread-view/thread/comment-view/comment/comment.component';
import { NewThreadComponent } from './thread-view/new-thread/new-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThreadViewComponent,
    ThreadComponent,
    CommentViewComponent,
    CommentComponent,
    NewThreadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
