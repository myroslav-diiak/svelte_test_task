<script lang="ts">
	import { useNavigate } from 'svelte-navigator';
	import { carBrand } from '../../store';
	import { zipCode } from '../../store';
	import { name } from '../../store';
	import { lastname } from '../../store';
	import { carModel } from '../../store';
	import { firstRegistration } from '../../store';

	let carBrandValue: string;
	let zipCodeValue: string;
	let nameValue: string;
	let lastnameValue: string;
	let carModelValue: string;
	let firstRegistrationValue: string;

	carBrand.subscribe((value) => {
		carBrandValue = value;
	});

	zipCode.subscribe((value) => {
		zipCodeValue = value;
	});

	name.subscribe((value) => {
		nameValue = value;
	});

	lastname.subscribe((value) => {
		lastnameValue = value;
	});

	carModel.subscribe((value) => {
		carModelValue = value;
	});

	firstRegistration.subscribe((value) => {
		firstRegistrationValue = value;
	});

	const navigate = useNavigate();

	const handleBackButton = () => {
		navigate('/secondForm');
	};
</script>

<div class="card" style="width: 18rem;">
	<div class="card-header">Personal info</div>
	<ul class="list-group list-group-flush">
		<li class="list-group-item">Car brand: {carBrandValue}</li>
		<li class="list-group-item">ZIP Code: {zipCodeValue}</li>
		<li class="list-group-item">Name: {nameValue}</li>
		<li class="list-group-item">Lastname: {lastnameValue}</li>
		<li class="list-group-item">Car model: {carModelValue}</li>
		<li class="list-group-item">First registartion: {firstRegistrationValue}</li>
	</ul>
</div>

<button type="button" class="btn btn-danger" on:click={handleBackButton}> Back </button>

<style>
	:global(.card) {
		margin: 40px auto 10px;
	}

	.btn {
		margin-left: 44%;
	}
</style>
