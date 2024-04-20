import { Routes } from '@angular/router'

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadComponent: () => import('./home/home.page').then(c => c.HomePage)
	},
	{
		path: 'control-flow',
		loadComponent: () => import('./chapters/pages/control-flow/control-flow.page').then(c => c.ControlFlowPage)
	},
	{
		path: 'deferred-loading',
		loadComponent: () =>
			import('./chapters/pages/deferred-loading/deferred-loading.page').then(c => c.DeferredLoadingPage)
	},
	{
		path: 'signals',
		loadComponent: () => import('./chapters/pages/signals/signals.page').then(c => c.SignalsPage)
	},
	{
		path: 'signals-io',
		loadComponent: () => import('./chapters/pages/signals-io/signals-io.page').then(c => c.SignalsIoPage)
	},
	{
		path: 'signals-two-way-binding',
		loadComponent: () => import('./chapters/pages/signals-twb/signals-twb.page').then(c => c.SignalsTwbPage)
	},
	{
		path: 'component-input-binding',
		loadComponent: () =>
			import('./chapters/pages/component-input-binding/component-input-binding.page').then(
				c => c.ComponentInputBindingPage
			)
	}
]
