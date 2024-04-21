import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToDoService {
	private innerTodos = signal<string[]>(this.getTodosFromStorage());
	todos = this.innerTodos.asReadonly();

	createToDo(newTodo: string) {
		this.innerTodos.update(currentValue => [...currentValue, newTodo]);
		this.updateStorage();
	}

	removeToDo(index: number) {
		this.innerTodos.update(currentValue => {
			currentValue.splice(index, 1);
			return [...currentValue];
		});
		this.updateStorage();
	}

	private getTodosFromStorage() {
		const storedTodos = localStorage.getItem('todos');
		return storedTodos ? JSON.parse(storedTodos) : [];
	}

	private updateStorage() {
		localStorage.setItem('todos', JSON.stringify(this.innerTodos()));
	}
}
