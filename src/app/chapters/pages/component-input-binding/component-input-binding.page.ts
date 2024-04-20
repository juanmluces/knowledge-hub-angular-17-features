import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-input-binding',
  standalone: true,
  imports: [],
  templateUrl: './component-input-binding.page.html',
  styleUrl: './component-input-binding.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentInputBindingPage {

}
