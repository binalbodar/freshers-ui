import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FreshersService {

  private apiURL = environment.BaseUrl;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  getUser(): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + 'UserMast/UserMastFill', '');
  }

  addUser(value: any): Observable<any> {
    return this.httpClient.post<any>(this.apiURL + 'UserMast/UserMastSave', value);
  }

  delete(data: any) {
    return this.httpClient.post<any>(this.apiURL + 'UserMast/UserMastDelete', data)
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
