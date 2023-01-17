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

	$: fullName = `${nameValue} ${lastnameValue}`;
	$: carInfo = `${carBrandValue} ${carModelValue}`;

	const navigate = useNavigate();

	const handleBackButton = () => {
		navigate('/secondForm');
	};
</script>

<div class="card" style="width: 18rem;">
	<div class="card-header">Personal info</div>
	<ul class="list-group list-group-flush">
		<li class="list-group-item">Car: {carInfo}</li>
		<li class="list-group-item">ZIP Code: {zipCodeValue}</li>
		<li class="list-group-item">Full Name: {fullName}</li>
		<li class="list-group-item">First registartion: {firstRegistrationValue}</li>
	</ul>
</div>

<button type="button" class="btn btn-danger" on:click={handleBackButton}> Back </button>

<style>
	.btn {
		margin-left: 44%;
	}
</style>
