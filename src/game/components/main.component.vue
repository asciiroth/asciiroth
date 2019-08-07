<template>
	<div id="asciiroth">
		<div id="left">
			<h1>hello world</h1>
			<p>current location: {{ playerCurrentLocation.name }}</p>
			<p>entities in this location {{ playerCurrentLocation.entities }}</p>
			<div class="output">
				<p v-for="output in game.output">{{ output }}</p>
			</div>
			<input
				type="text"
				v-model="currentInput"
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
		Player,
		Entity,
	} from '@asciiroth/core';

	import { AbbyClass } from '../NPCs/abby.npc';

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
						entities: [
							new Entity({
								name: 'Broom',
							}),
						],
					}),
					new Location({
						name: 'Northshire Valley',
						coords: [0, 0],
						entities: [
							new AbbyClass(),
						],
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
				currentInput: '',
			}
		},
		methods: {
			handleInput(e) {
				const [ command, ...args ] = e.target.value.split(' ');
				this.game.addOutput(`${ command } ${ args }`);

				this.currentInput = '';

				if (command === 'walk') {
					if (!args || !args.length) {
						this.game.addOutput('Direction is not defined');
					}

					this.game.player.action(command, {
						direction: args[0],
					});
				}

				if (command === 'talk') {
					if (!args || !args.length) {
						this.game.addOutput('Who would you like to talk to?');
					}

					const target = this.playerCurrentLocation.findEntity(args[0]);

					target.action(command, {
						talkSubject: args[1] || undefined,
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
