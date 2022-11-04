import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = environment.todosApiUrl;
  loading: boolean = false;
  laodingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[] | ProgressEvent> {
    return this.http.get<Todo[]>(this.url)
    .pipe(catchError(this.errorHandler))
  }

  getTodoById(id: number): Observable<Todo | ProgressEvent> {
    return this.http.get<Todo>(this.url + '/' +id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = error.error.message;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`; //Errors related to ToDo Service
      //We can also log global errors using the ErrorInterceptor
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
