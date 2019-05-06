import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    LoginComponent,
    AdminLayoutComponent,
    AdminComponent,
    BooksComponent,
    AuthorsComponent,
    PublishersComponent,
    BranchesComponent,
    BorrowersComponent,
    DueDateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
