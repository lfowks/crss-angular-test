import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {
    constructor(private todoService: TodoService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.todoService.laodingSubject.next(true);

        //HERE WE CAN HANDLE TOKENS TO SEND AS PART OF HEADERS

        return next.handle(req).pipe(finalize(()=>{
            this.todoService.laodingSubject.next(false);
        }));
    }
}