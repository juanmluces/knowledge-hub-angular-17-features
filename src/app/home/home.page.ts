import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from './constants/chapters';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [MatListModule, MatIconModule, MatButtonModule, MatCardModule, RouterLink],
	templateUrl: './home.page.html',
	styleUrl: './home.page.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
	chapters = signal([...CHAPTERS]);
	displayCard = signal<any>(undefined);
}

