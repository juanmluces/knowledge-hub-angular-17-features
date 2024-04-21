import { NgFor, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { User } from '../../types/control-flow.types'

@Component({
	selector: 'app-users-list',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		NgIf,
		NgFor,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		FormsModule
	],
	templateUrl: './users-list.component.html',
	styleUrl: './users-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
	@Input() users: User[] = []
	filteredUsers: User[] = []
	filterValue = ''
	ngOnInit() {
		this.filteredUsers = [...this.users]
	}

	trackByFn(index: number, item: any) {
		return item.id
	}

	clearFilter() {
		this.filterValue = ''
		this.filteredUsers = [...this.users]
	}

	filterUsers() {
		this.filteredUsers = this.users.filter(user => user.name.includes(this.filterValue.toLowerCase().trim()))
	}
}
