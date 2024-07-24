import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodoById(id).subscribe((todo) => {
        this.todo = todo;
      });
    }
  }

  deleteTodo(): void {
    if (this.todo) {
      this.todoService.deleteTodo(this.todo.id).subscribe(() => {
        window.history.back();
      });
    }
  }

  markAsCompleted(): void {
    if (this.todo) {
      this.todo.isCompleted = !this.todo.isCompleted;
      this.todoService.updateTodo(this.todo.id, this.todo).subscribe();
    }
  }
}
