import { NgFor, NgIf } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { Post } from '../../types/control-flow.types'

@Component({
	selector: 'app-posts-list',
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
	templateUrl: './posts-list.component.html',
	styleUrl: './posts-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent implements OnInit {
	@Input() posts: Post[] = []
	filteredPosts: Post[] = []
	filterValue = ''
	ngOnInit() {
		this.filteredPosts = [...this.posts]
	}

	trackByFn(index: number, item: any) {
		return item.id
	}

	clearFilter() {
		this.filterValue = ''
		this.filteredPosts = [...this.posts]
	}

	filterPosts() {
		this.filteredPosts = this.posts.filter(post => post.title.includes(this.filterValue.toLowerCase().trim()))
	}
}
