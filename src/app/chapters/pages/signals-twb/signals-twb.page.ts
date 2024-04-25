import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TwbCardComponent } from './components/twb-card/twb-card.component';

@Component({
	selector: 'app-signals-twb',
	standalone: true,
	imports: [FormsModule, MatFormFieldModule, MatInputModule, TwbCardComponent, MatButtonModule],
	templateUrl: './signals-twb.page.html',
	styleUrl: './signals-twb.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTwbPage {
	ngModelInputValue = 'Initial NgModel';

	expanded = false;
	// expanded = signal(false);
}

