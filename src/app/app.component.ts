import { Component } from '@angular/core';
import { TodoService } from './core/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crss-angular-test';

  showLoading = false;

  constructor(private bookingService: TodoService) {
      this.bookingService.laodingSubject.subscribe(x=>{
        this.showLoading = x;
      })
    }
}
