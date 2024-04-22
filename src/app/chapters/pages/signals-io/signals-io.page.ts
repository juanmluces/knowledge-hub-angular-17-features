import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsersListComponent } from './components/users-list/users-list.component';
import { User } from './types/users.type';

@Component({
	selector: 'app-signals-io',
	standalone: true,
	imports: [UsersListComponent, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
	templateUrl: './signals-io.page.html',
	styleUrl: './signals-io.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsIoPage {
	formGroup = new FormGroup({
		name: new FormControl('', { validators: [Validators.required], nonNullable: true }),
		surname: new FormControl('', { validators: [Validators.required], nonNullable: true })
	});

	users: User[] = [
		{
			id: 1,
			name: 'Gandalf',
			surname: 'The Gray'
		},
		{
			id: 2,
			name: 'Harry',
			surname: 'The Potter'
		},
		{
			id: 3,
			name: 'Tony',
			surname: 'The Stark'
		}
	];

	addNewUser() {
		const userData = this.formGroup.getRawValue();
		const lastElId = this.users.at(-1)?.id || 0;
		this.users = [...this.users, { id: lastElId + 1, name: userData.name, surname: userData.surname }];
		this.formGroup.reset();
	}

	onDeleteUser(userId: number) {
		this.users = this.users.filter(user => user.id !== userId);
	}
}

