import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { filter, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		MatToolbarModule,
		MatIconModule,
		NgOptimizedImage,
		MatButtonModule,
		RouterLink,
		MatTooltipModule
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	showBack = toSignal(
		inject(Router).events.pipe(
			filter(event => event instanceof NavigationEnd),
			map(event => (event as NavigationEnd).url !== '/home')
		),
		{ initialValue: false }
	);
}
