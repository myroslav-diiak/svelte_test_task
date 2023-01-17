<script lang="ts">
	import { useNavigate } from 'svelte-navigator';
	import { name } from '../../store';
	import { lastname } from '../../store';
	import { carModel } from '../../store';
	import { firstRegistration } from '../../store';
	const navigate = useNavigate();

	const handleFormSubmit = () => {
		name.set(nameValue);
		lastname.set(lastnameValue);
		carModel.set(carModelValue);
		firstRegistration.set(firstRegistrationValue);
		navigate('/loader');
	};

	const handleBackButton = () => {
		navigate('/');
	};

	let nameValue = '';
	let lastnameValue = '';
	let carModelValue = '';
	let firstRegistrationValue = '';
</script>

<form>
	<form class="form" on:submit|preventDefault={handleFormSubmit}>
		<label for="inputName" class="form-label"> Name </label>
		<input
			type="text"
			id="inputName"
			class="form-control"
			placeholder="Type your name"
			bind:value={nameValue}
			required
		/>
		<div class="form-text">Type your name</div>

		<label for="inputLastname" class="form-label"> Lastname </label>
		<input
			type="text"
			id="inputLastname"
			class="form-control"
			placeholder="Type your lastname"
			bind:value={lastnameValue}
			required
		/>
		<div class="form-text">Type your lastname</div>

		<label for="inputCarModel" class="form-label"> Car model </label>
		<input
			type="text"
			id="inputCarModel"
			class="form-control"
			placeholder="Type your car model"
			bind:value={carModelValue}
			required
		/>
		<div class="form-text">Type your car model</div>

		<label for="inputFirstReg" class="form-label"> First registration </label>
		<input
			type="text"
			id="inputFirstReg"
			class="form-control"
			placeholder="Type your first registration"
			bind:value={firstRegistrationValue}
			required
		/>
		<div class="form-text">Type your first registration</div>

		<button type="button" class="btn btn-danger" on:click={handleBackButton}> Back </button>

		<button type="submit" class="btn btn-primary"> Next step </button>
	</form>
</form>
