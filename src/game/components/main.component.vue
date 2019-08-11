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

	/*

	Npc {
		speech: {
			default: ‘hello’,
		}
	}

	Listeners {
		private _listeners: [];

		constructor(listeners) {
			listeners.forEach(listener => {
				this._listeners.push(window.addEventListener(listener));
			});
		}
	}

	// TBH THIS MAYBE COULD JUST BE ON THE GAME CLASS
	CommandController {
		private game: Game;
		private listeners: Listeners;
		private actions: {
			// Name: () =>
			move(game, args) {
				const locationEntity =
				entity = something
				entity.coords =
			}
		}}

		constructor(actions, listeners, game) {
			this.actions = {…this.actions, …actions);
			this.listeners = new Listeners(listeners);
			this.game = game;
		}

		command(command, ..args) {
			this.actions[command](this.game, args);
		}
	}

	Game {
		Entities,
		Locations,
		Zones,
	}

	Location {
		Zone // so now location has a reference to zone, instead of zone having a list of locations
		…location
	}

	Entities // same as current Entities cache
		Entity // Same as current entity class

		Const inputController = new InputController({
		actions: {
			talk(game, args) { 			// stuff
			}
		}
	})

	*/

	enum GameStages {
		CharacterSelect,
		InGame,
	}

	export default {
		name: 'MainComponent',
		data() {
			const game = new Game('World of Asciiroth')

			const world = game.newWorld('Eastern Kingdoms');

			const zone = game.newZone({
				name: 'Zone 1',
			});

			const location = game.newLocation({
				name: 'Location 1',
			});

			const player = game.newPlayer({
				name: 'Jacob',
				world,
				zone,
				location,
			})


			//const stage = game.createStage(GameStages.CharacterSelect);

			//console.log(stage);

			//game.setStage(GameStages.CharacterSelect);
			// const world = game.newWorld('Eastern Kingdoms')
			//
			// const a = game.newNpc({
			// 	name: 'Hooligan',
			// 	referenceNames: ['hooligan'],
			// 	// actions: {
			// 	// 	rally: (_game, payload) => {
			// 	// 		console.log('ruugabuuga');
			// 	// 	},
			//
			// 	// },
			//
			// })
			//
			// // const commandClass = new commandClass (game,){
			// // 	private game: game;
			// //
			// // 	actions: {
			// // 		rally: (game)
			// // 	}
			// // }
			//
			// const zone = world.newZone({
			// 	name: 'Elwynn Forest',
			// 	locations: [
			// 		new Location({
			// 			name: 'Northshire Abbey',
			// 			coords: [0, 1],
			// 			entities: [
			// 				new Entity({
			// 					name: 'Broom',
			// 					referenceNames: ['broom'],
			// 					actions: {
			// 						talk: (game, payload) => {
			// 							console.log('a');
			// 						}
			// 					}
			// 				}),
			// 				a,
			// 			],
			// 		}),
			// 		new Location({
			// 			name: 'Northshire Valley',
			// 			coords: [0, 0],
			// 			entities: [
			// 				new AbbyClass(),
			// 			],
			// 		}),
			// 	],
			// })
			//
			// const player = game.newPlayer({
			// 	name: 'Jacob',
			// 	zone,
			// 	coords: [0, 0],
			// });

			window['game'] = game;

			return {
				game,
				// a,
				currentInput: '',
			}
		},
		methods: {
			handleInput(e) {
				const [ command, ...args ] = e.target.value.split(' ');
				this.game.addOutput(`${ command } ${ args }`);

				this.currentInput = '';

				this.game.action(command, args);
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
