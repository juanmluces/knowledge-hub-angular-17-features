import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CounterComponent } from './components/counter/counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
	selector: 'app-signals',
	standalone: true,
	imports: [TodoListComponent, CounterComponent, MatDividerModule],
	templateUrl: './signals.page.html',
	styleUrl: './signals.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsPage {}
