export const CHAPTERS = [
	{
		title: 'Built in control flow',
		route: ['/', 'control-flow'],
		image: 'assets/control-flow.png',
		description: `This is angular's new declarative syntax for writing control flow in the template, eliminating the use of *ngIf, *ngFor and ngSwitch which was a directive-based control flow. `
	},
	{
		title: 'Deferred loading',
		route: ['/', 'deferred-loading'],
		image: 'assets/defer.png',
		description: `Deferrable views help you optimize your initial bundle size and improve the initial load of your application by allowing you to declaratively lazy load portions of your template until they are needed later.`
	},
	{
		title: 'Signals',
		route: ['/', 'signals'],
		image: 'assets/signal.png',
		description: `Angular Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.`
	},
	{
		title: 'Signal Inputs / Outputs',
		route: ['/', 'signals-io'],
		image: 'assets/signal-input.png',
		description: `Signal inputs allow values to be bound from parent components. Those values are exposed using a Signal and can change during the lifecycle of your component.`
	},
	{
		title: 'Signal two way binding',
		route: ['/', 'signals-two-way-binding'],
		image: 'assets/signal-twb.png',
		description: `With the new  signals input() and output() functions, we now have new signal based Two way binding! `
	},
	{
		title: 'Component input binding',
		route: ['/', 'component-input-binding'],
		image: 'assets/component-input-binding.png',
		description: `Router function that enables binding information from the Router state directly to the inputs of the component in Route configurations.`
	}
];
