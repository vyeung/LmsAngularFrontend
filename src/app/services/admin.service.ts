import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

// book methods 

  getAllBooks() {
    return this.http.get(`${environment.api_endpoint}/books`);
  }
  getBook(id) {
    return this.http.get(`${environment.api_endpoint}/book/${id}`);
  }
  addBook(bookBody) {
    return this.http.post(`${environment.api_endpoint}/book`, bookBody);
  }
  updateBook(id, bookBody) {
    return this.http.put(`${environment.api_endpoint}/book/${id}`, bookBody);
  }
  deleteBook(id) {
    return this.http.delete(`${environment.api_endpoint}/book/${id}`);
  }

// publisher methods 


getAllPublishers(query) {
  return this.http.get(`${environment.api_endpoint}/publishers`+ query);
}
getPublisher(id) {
  return this.http.get(`${environment.api_endpoint}/publisher/${id}`);
}
addPublisher(publisher) {
  return this.http.post(`${environment.api_endpoint}/publisher`, publisher);
}
updatePublisher(publisher, id) {
  return this.http.put(`${environment.api_endpoint}/publisher/${id}`, publisher);
}
deletePublisher(id) {
  return this.http.delete(`${environment.api_endpoint}/publisher/${id}`);
}


// branch methodes 


getAllBranches(query) {
  return this.http.get(`${environment.api_endpoint}/libraryBranches`+ query);
}
getBranch(id) {
  return this.http.get(`${environment.api_endpoint}/libraryBranch/${id}`);
}
addBranch(branch) {
  return this.http.post(`${environment.api_endpoint}/libraryBranch`, branch);
}
updateBranch(branch,id) {
  return this.http.put(`${environment.api_endpoint}/libraryBranch/${id}`, branch);
}
deleteBranch(id) {
  return this.http.delete(`${environment.api_endpoint}/libraryBranch/${id}`);
}


// due date methods 

getAllLoans(query) {
  return this.http.get(`${environment.api_endpoint}/bookLoans`+ query);
}

getAllLoansDetails(query) {
  return this.http.get(`${environment.api_endpoint}/bookLoansAsDTO`+ query);
}

updateBookLoanDueDate(loan,bookId,branchId,cardNo) {
  return this.http.put(
  `${environment.api_endpoint}/bookLoans/bookId/${bookId}/branchId/${branchId}/cardNo/${cardNo}`, loan);
}


/* Authors */
getAllAuthors() {
  return this.http.get(`${environment.api_endpoint}/authors`);
}

getAuthor(id){
  return this.http.get(`${environment.api_endpoint}/author/${id}`);
}

addAuthor(author){
  return this.http.post(`${environment.api_endpoint}/author`, author);
}

deleteAuthor(id) {
  return this.http.delete(`${environment.api_endpoint}/author/${id}`);
}
editAuthor(id, author){
  return this.http.put(`${environment.api_endpoint}/author/${id}`, author);
}

/* Borrowers */
getAllBorrowers() {
  return this.http.get(`${environment.api_endpoint}/borrowers`);
}

getBorrower(id){
  return this.http.get(`${environment.api_endpoint}/borrower/${id}`);
}

addBorrower(borrower){
  return this.http.post(`${environment.api_endpoint}/borrower`, borrower);
}

deleteBorrower(id) {
  return this.http.delete(`${environment.api_endpoint}/borrower/${id}`);
}
editBorrower(id, borrower){
  return this.http.put(`${environment.api_endpoint}/borrower/${id}`, borrower);
}



}