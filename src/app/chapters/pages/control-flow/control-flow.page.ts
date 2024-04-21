import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { ControlFlowApiService } from './api/control-flow-api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ResponseType } from './types/control-flow.types';

@Component({
	selector: 'app-control-flow',
	standalone: true,
	imports: [
		MatButtonModule,
		PostsListComponent,
		UsersListComponent,
		NgIf,
		NgSwitch,
		NgSwitchDefault,
		NgSwitchCase,
		MatProgressSpinnerModule
	],
	templateUrl: './control-flow.page.html',
	styleUrl: './control-flow.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlFlowPage {
	#dataApi = inject(ControlFlowApiService);
	#cd = inject(ChangeDetectorRef);
	responseData?: ResponseType;
	isLoading = false;

	getPosts() {
		this.responseData = undefined;
		this.isLoading = true;
		this.#dataApi.getPosts$().subscribe(data => {
			this.responseData = data;
			this.isLoading = false;
			this.#cd.markForCheck();
		});
	}

	getUsers() {
		this.responseData = undefined;
		this.isLoading = true;
		this.#dataApi.getUsers$().subscribe(data => {
			this.responseData = data;
			this.isLoading = false;
			this.#cd.markForCheck();
		});
	}
}
