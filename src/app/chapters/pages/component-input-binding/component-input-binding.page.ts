import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-component-input-binding',
	standalone: true,
	imports: [MatCardModule, MatListModule, MatDividerModule],
	templateUrl: './component-input-binding.page.html',
	styleUrl: './component-input-binding.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentInputBindingPage {
	@Input() title = '';
	@Input() description = '';
	@Input() search = '';
	@Input() entityId = '';
	// activeRoute = inject(ActivatedRoute);

	ngOnInit() {
		// this.getDataFromSubscription();
		// this.getDataFromSnapshot();
		// console.log(this.activeRoute.snapshot);

		console.log({
			title: this.title,
			description: this.description,
			search: this.search,
			entityId: this.entityId
		});
	}

	// getDataFromSnapshot() {
	// 	this.title = this.activeRoute.snapshot.data['title'];
	// 	this.description = this.activeRoute.snapshot.data['description'];
	// 	this.search = this.activeRoute.snapshot.queryParams['search'];
	// 	this.entityId = this.activeRoute.snapshot.params['entityId'];
	// }

	// getDataFromSubscription() {
	// 	this.activeRoute.queryParams.subscribe(query => {
	// 		this.search = query['search'];
	// 	});
	// 	this.activeRoute.data.subscribe(data => {
	// 		this.title = data['title'];
	// 		this.description = data['description'];
	// 	});
	// 	this.activeRoute.params.subscribe(params => {
	// 		this.entityId = params['entityId'];
	// 	});
	// }
}

