import Home from './components/Home.vue'
import ExampleComponent from './components/ExampleComponent.vue'

export default {
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'Home',
			props: true
		},
		{
			path: '/ExampleComponent',
			component: ExampleComponent,
			name: 'ExampleComponent',
			props: true
		}
	]
};
