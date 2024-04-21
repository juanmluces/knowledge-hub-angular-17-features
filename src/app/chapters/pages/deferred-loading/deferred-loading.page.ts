import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeavyCardComponent } from './components/heavy-component/heavy-card.component';

@Component({
	selector: 'app-deferred-loading',
	standalone: true,
	imports: [HeavyCardComponent, MatProgressSpinnerModule],
	templateUrl: './deferred-loading.page.html',
	styleUrl: './deferred-loading.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferredLoadingPage {}
