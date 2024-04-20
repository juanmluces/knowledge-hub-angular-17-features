import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-deferred-loading',
  standalone: true,
  imports: [],
  templateUrl: './deferred-loading.page.html',
  styleUrl: './deferred-loading.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferredLoadingPage {

}
