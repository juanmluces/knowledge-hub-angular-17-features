import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.page.html',
  styleUrl: './signals.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsPage {

}
