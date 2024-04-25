import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ToDoService } from '../../services/todo.service';

@Component({
	selector: 'app-todo-list',
	standalone: true,
	imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatListModule],
	templateUrl: './todo-list.component.html',
	styleUrl: './todo-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
	todoService = inject(ToDoService);
	todos = this.todoService.todos;
	totalTodos = computed(() => this.todos().length);
	newTodoValue = '';

	createToDo() {
		this.todoService.createToDo(this.newTodoValue);
		this.newTodoValue = '';
	}

	removeToDo(index: number) {
		this.todoService.removeToDo(index);
	}
}

