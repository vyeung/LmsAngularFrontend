import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { AdminComponent } from "./admin/admin.component";
import { BooksComponent } from "./admin/books/books.component";

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
          }
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