import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todo: Todo = {
    id: '',
    title: '',
    description: '',
    isCompleted: false,
    createdAt: new Date(),
  };

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo(): void {
    this.todoService.addTodo(this.todo).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
