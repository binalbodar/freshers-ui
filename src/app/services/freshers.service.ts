import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FreshersService {

  private apiURL = environment.BaseUrl;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll(): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + 'UserMast/UserMastFill','')
      .pipe(
        catchError(this.errorHandler)
      )
  }
  addPost(item: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiURL}/posts/`, item);
  }

  delete(item: any) {
    return this.httpClient.delete<any>(this.apiURL + '/posts/' + item, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
