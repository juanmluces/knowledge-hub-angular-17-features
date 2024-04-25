import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	computed,
	input,
	output,
	signal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { User } from '../../types/users.type';

@Component({
	selector: 'app-users-list',
	templateUrl: 'users-list.component.html',
	styleUrl: 'users-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatIconModule],
	standalone: true
})
export class UsersListComponent {
	@Input() users: User[] = [];

	@Output() deleteUser = new EventEmitter<number>();

	filteredUsers = computed(() => {
		return this.users?.filter(user => {
			const query = this.query().toLowerCase().trim();
			return user.name.toLowerCase().trim().includes(query) || user.surname.toLowerCase().trim().includes(query);
		});
	});

	private query = signal('');

	updateQuery(event: Event) {
		this.query.set((event.target as HTMLInputElement).value);
	}
}
