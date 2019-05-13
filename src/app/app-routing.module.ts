import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminComponent } from "./admin/admin.component";
import { BooksComponent } from "./admin/books/books.component";
import { PublishersComponent } from './admin/publishers/publishers.component';
import { BranchesComponent } from './admin/branches/branches.component';
import { EditPublisherComponent } from './admin/publishers/edit-publisher/edit-publisher.component';
import { AddPublisherComponent } from './admin/publishers/add-publisher/add-publisher.component';
import { EditDueDateComponent } from './admin/due-date/edit-due-date/edit-due-date.component';
import { DueDateComponent } from './admin/due-date/due-date.component';
import { AddBranchComponent } from './admin/branches/add-branch/add-branch.component';
import { EditBranchComponent } from './admin/branches/edit-branch/edit-branch.component';
import { EditAuthorComponent } from './admin/authors/edit-author/edit-author.component';
import { AddAuthorComponent } from './admin/authors/add-author/add-author.component';
import { AddBorrowerComponent } from './admin/borrowers/add-borrower/add-borrower.component';
import { EditBorrowerComponent } from './admin/borrowers/edit-borrower/edit-borrower.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { BorrowersComponent } from './admin/borrowers/borrowers.component';
import { AddBookComponent } from "./admin/books/add-book/add-book.component";
import { EditBookComponent } from "./admin/books/edit-book/edit-book.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent 
      },
      {
        path: "adminLogin",
        component: LoginComponent
      },
      {
        path: "admin",
        component: AdminLayoutComponent,
        children: [
          {
            path: "dashboard",
            component: AdminComponent
          },
          {
            path: "books",
            component: BooksComponent
          },
          {
            path: "books/add",
            component: AddBookComponent
          },
          {
            path: "books/edit/:id",
            component: EditBookComponent
          },
          {
            path: "publishers",
            component: PublishersComponent
          },
          {
            path: "addpublisher",
            component: AddPublisherComponent
          },
          {
            path: "editpublisher/:id",
            component: EditPublisherComponent
          },
          {
            path: "branches",
            component: BranchesComponent
          },
          {
            path: "addbranch",
            component: AddBranchComponent
          },
          {
            path: "editbranch/:id",
            component: EditBranchComponent
          },
          {
            path: "dueDate",
            component: DueDateComponent
          },
          {
            path: "editdueDate/:id1/:id2/:id3",
            component: EditDueDateComponent
          },
          {
            path: "authors",
            component: AuthorsComponent
          },
          {
            path: "authors/edit/:id",
            component: EditAuthorComponent
          },
          {
            path: "authors/add",
            component: AddAuthorComponent
          },
          {
            path: "borrowers",
            component: BorrowersComponent
          },
          {
            path: "borrowers/edit/:id",
            component: EditBorrowerComponent
          },
          {
            path: "borrowers/add",
            component: AddBorrowerComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }