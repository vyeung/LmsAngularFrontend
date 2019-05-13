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
import { HeaderComponent } from './layout/header/header.component';
import { EditAuthorComponent } from './admin/authors/EditForm/edit-author/edit-author.component';
import { AddAuthorComponent } from './admin/authors/add-author/add-author.component';
import { AddBorrowerComponent } from './admin/borrowers/add-borrower/add-borrower.component';
import { EditBorrowerComponent } from './admin/borrowers/edit-borrower/edit-borrower.component';
import { AddBookComponent } from './admin/books/add-book/add-book.component';
import { EditBookComponent } from './admin/books/edit-book/edit-book.component';
import { EditPublisherComponent } from './admin/publishers/edit-publisher/edit-publisher.component';
import { AddPublisherComponent } from './admin/publishers/add-publisher/add-publisher.component';
import { EditDueDateComponent } from './admin/due-date/edit-due-date/edit-due-date.component';
import { AddBranchComponent } from './admin/branches/add-branch/add-branch.component';
import { EditBranchComponent } from './admin/branches/edit-branch/edit-branch.component';

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
    HeaderComponent,
    EditAuthorComponent,
    AddAuthorComponent,
    AddBorrowerComponent,
    EditBorrowerComponent,
    AddBookComponent,
    EditBookComponent,
    EditPublisherComponent,
    AddPublisherComponent,
    AddBranchComponent,
    EditBranchComponent,
    EditDueDateComponent,
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