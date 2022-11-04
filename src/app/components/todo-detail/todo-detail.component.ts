import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo:Todo = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
