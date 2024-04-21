import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';

@Component({
	selector: 'app-counter',
	standalone: true,
	imports: [MatCardModule, MatButtonModule, MatIconModule, MatInput, MatFormField, FormsModule],
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
	manualCount = 0;
	count = signal(0);
	doubleCount = computed(() => {
		return this.count() * 2;
	});

	addCount() {
		this.count.update(val => ++val);
	}

	subtractCont() {
		this.count.update(val => --val);
	}

	manuallySetCount() {
		this.count.set(this.manualCount);
	}
}
