import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-twb-card',
	standalone: true,
	imports: [MatCardModule, MatButtonModule],
	templateUrl: './twb-card.component.html',
	styleUrl: './twb-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwbCardComponent {
	@Input() expanded = false;
	@Output() expandedChange = new EventEmitter<boolean>();
}
