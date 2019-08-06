<template>
	<div id="asciiroth">
		<div id="left">
			<h1>hello world</h1>
			<p>current location: {{ playerCurrentLocation.name }}</p>
			<input
				type="text"
				@keydown.38.40.prevent
				@keyup.enter="handleInput">
		</div>
		<div id="right"></div>
	</div>
</template>

<script lang="ts">
	import {
		Game,
		World,
		Zone,
		Location,
		Player
	} from '@asciiroth/core';

	export default {
		name: 'MainComponent',
		data() {
			const game = new Game('World of Asciiroth')
			const world = game.newWorld('Eastern Kingdoms')
			const zone = world.newZone({
				name: 'Elwynn Forest',
				locations: [
					new Location({
						name: 'Northshire Abbey',
						coords: [0, 1],
					}),
					new Location({
						name: 'Northshire Valley',
						coords: [0, 0],
					}),
				],
			}),

			const player = game.newPlayer({
				name: 'Jacob',
				zone,
				coords: [0, 0],
			});

			return {
				game,
			}
		},
		methods: {
			handleInput(e) {
				const [ command, ...args ] = e.target.value.split(' ');
				if (command === 'walk') {
					if (!args || !args.length) {
						console.error('direction is not defined');
					}

					this.game.player.action(command, {
						direction: args[0],
					});
				}
			}
		},
		computed: {
			playerCurrentLocation() {
				if (!this.game.world) {
					return 'no location';
				}
				return this.game.player.zone.getLocationAtCoords(...this.game.player.coords);
			}
		}
	}
</script>

<style lang="scss" scoped>
	input {
		font-size: 2rem;
	}
</style>
