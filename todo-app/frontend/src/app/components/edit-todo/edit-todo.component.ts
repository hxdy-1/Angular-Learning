import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodoById(id).subscribe((todo) => {
        this.todo = todo;
      });
    }
  }

  updateTodo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.todo) {
      this.todoService.updateTodo(this.todo.id, this.todo).subscribe(() => {
        this.router.navigate([`/details/${id}`]);
      });
    }
  }
}
