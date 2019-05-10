import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminComponent } from './admin/admin.component';
import { BooksComponent } from './admin/books/books.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { PublishersComponent } from './admin/publishers/publishers.component';
import { BranchesComponent } from './admin/branches/branches.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { DueDateComponent } from './admin/due-date/due-date.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { AddBookComponent } from './admin/books/add-book/add-book.component';
import { EditBookComponent } from './admin/books/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    AdminLayoutComponent,
    AdminComponent,
    BooksComponent,
    AuthorsComponent,
    PublishersComponent,
    BranchesComponent,
    BorrowersComponent,
    DueDateComponent,
    DashboardComponent,
    HeaderComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }