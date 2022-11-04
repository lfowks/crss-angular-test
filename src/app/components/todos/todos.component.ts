import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  loading: boolean = false;
  top = 15;

  todoSelected: Todo | any = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) { 
    this.activatedRoute.data.subscribe((response: any) => {
      this.todos = response.todos;
    });
  }

  ngOnInit(): void {
    this.todoService.laodingSubject.subscribe(loading=>{
      this.loading = loading;
    });
  }

  selectTodo(todoId: number){
    this.todoService.getTodoById(todoId).subscribe(x=>{
      this.todoSelected = x; 
    });
       
  }
  
}
