<script>
	import { Router, Route } from 'svelte-navigator';
	import FirstForm from './FirstForm/FirstForm.svelte';
	import SecondForm from './SecondForm/SecondForm.svelte';
	import LoadingPage from './LoadingPage/LoadingPage.svelte';
	import ResultV1 from './ResultV1/ResultV1.svelte';
	import ResultV2 from './ResultV2/ResultV2.svelte';
</script>

<Router url="/">
	<Route path="/" component={FirstForm}>
		<FirstForm />
	</Route>
	<Route path="/secondForm">
		<SecondForm />
	</Route>
	<Route path="/loader">
		<LoadingPage />
	</Route>
	<Route path="/resultV1">
		<ResultV1 />
	</Route>
	<Route path="/resultV2">
		<ResultV2 />
	</Route>
</Router>
