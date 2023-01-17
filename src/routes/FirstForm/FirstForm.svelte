<script>
	import { carBrand } from '../../store';
	import { zipCode } from '../../store';
	import { useNavigate } from 'svelte-navigator';
	const navigate = useNavigate();

	const validCarBrands = ['Audi', 'BMW', 'Nissan'];
	$: validCarBrandsString = validCarBrands.join(', ');
	const validZipCodes = ['65000', '66000', '67000', '68000'];
	$: validZipCodesString = validZipCodes.join(', ');
	let carBrandValue = '';
	let zipCodeValue = '';
	let errorMessage = '';

	const handleFormSubmit = () => {
		const carBrandsError = !validCarBrands.includes(carBrandValue);
		const zipCodeError = !validZipCodes.includes(zipCodeValue);
		if (carBrandsError && zipCodeError) {
			errorMessage = 'Incorrect data in both fields';
		} else if (carBrandsError) {
			errorMessage = 'Incorrect car brand';
		} else if (zipCodeError) {
			errorMessage = 'Incorrect ZIP code';
		} else {
			errorMessage = '';
			carBrand.set(carBrandValue);
			zipCode.set(zipCodeValue);
			navigate('/secondForm');
		}
	};
</script>

<form class="form" on:submit|preventDefault={handleFormSubmit}>
	<label for="inputCarBrand" class="form-label"> Type car brand </label>
	<input
		type="text"
		id="inputCarBrand"
		class="form-control"
		placeholder="Type your car brand"
		bind:value={carBrandValue}
	/>
	<div class="form-text">
		Avaliable car brands: {validCarBrandsString}
	</div>

	<label for="inputZipCode" class="form-label"> Type ZIP code </label>
	<input
		type="text"
		id="inputZipCode"
		class="form-control"
		placeholder="Type your ZIP code"
		bind:value={zipCodeValue}
	/>
	<div class="form-text">
		Avaliable ZIP codes: {validZipCodesString}
	</div>

	<button type="submit" class="btn btn-primary"> Next step </button>
</form>

{#if errorMessage.length}
	<div class="alert alert-danger" role="alert">
		{errorMessage}
	</div>
{/if}

<style>
	:global(.form) {
		width: 350px;
		margin: 40px auto;
		padding: 15px;

		border: 1px solid #979696fd;
		border-radius: 10px;
	}
	:global(.form-text) {
		padding-bottom: 5px;
		margin-bottom: 10px;
		border-bottom: 1px solid #979696fd;
	}

	:global(.alert) {
		width: 350px;
		margin: auto;
	}
</style>
