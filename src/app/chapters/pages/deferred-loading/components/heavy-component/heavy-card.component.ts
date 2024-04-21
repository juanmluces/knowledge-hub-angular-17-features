import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

@Component({
	selector: 'app-heavy-card',
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		MatExpansionModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule
	],
	providers: [provideNativeDateAdapter()],
	templateUrl: './heavy-card.component.html',
	styleUrl: './heavy-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeavyCardComponent {}
