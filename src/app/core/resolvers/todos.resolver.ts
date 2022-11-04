import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
 
 
@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<any> {
  constructor(private todoService: TodoService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.todoService.getTodos().pipe(
      catchError(error => {
        console.error(error);
        return of('No data');
      })
    );
  }
}