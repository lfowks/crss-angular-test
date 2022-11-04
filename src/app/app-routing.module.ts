import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodosResolver } from './core/resolvers/todos.resolver';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    resolve: { todos: TodosResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
