<template>
	<div id="asciiroth">
		<div id="left">
			<h2>{{ player.zone.name }} <span class="small">{{ player.location.name }}</span></h2>
			<!-- <p>entities in this location {{ player.entities }}</p> -->
			<div id="entities" class="card">
				<h3>Around you, you see:</h3>
				<div class="entity card" v-for="entity in player.location.entities">
					<div class="card-left">
						<img :src="entity.custom.image">
					</div>
					<div class="card-right">
						<h4>{{ entity.name }}</h4>
						<blockquote>{{ entity.description }}</blockquote>
						<div class="buttons">
							<button
								type="button"
								name="button"
								v-for="action in entity.actions"
								>
								🗣
								{{ action }}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="output">
				<h1>hello world</h1>
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
			game.setWorld(world);

			const abby = game.newNpc({
				name: 'Abby',
				referenceNames: ['Abby'],
				description: 'ooh lah lah',
				speech: {
					wolf: "Uh oh there's a wolf!",
					default: "Yo waddup",
				},
				actions: [ 'talk', 'trade' ],
				custom: {
					image: 'https://gamepedia.cursecdn.com/wowpedia/7/7a/Charactercreate-races_human-female.png?version=708cfbd211c07e688fbae08140874518',
				},
			});

			const location1 = game.newLocation({
				name: 'Location 1',
				entities: [
					abby,

				]
			});

			const location2 = game.newLocation({
				name: 'Location 2',
			});

			const location3 = game.newLocation({
				name: 'Location 3',
			});

			const zone = game.newZone({
				name: 'Zone 1',
				grid: [
					[
						location2,
					],
					[
						location1,

					],
					[
						location3,
					]
				],
			});

			const player = game.newPlayer({
				name: 'Jacob',
				world,
				zone,
				location: location1,
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
				this.game.addOutput(`${ command } ${ args.join(' ') }`);

				this.currentInput = '';

				this.game.action(command, args);
			}
		},
		computed: {
			player() {
				return this.game.player;
			},
		}
	}
</script>

<style lang="scss" scoped>
	#left {
		h2 {
			font-family: "Luckiest Guy";
			font-weight: 400;
			font-size: 1.75rem;
			margin-top: 0;

			.small {
				font-family: "Poiret One";
				color: darken(white, 15%);
				font-size: 1.25rem;
				display: block;
			}
		}

		.card {
			padding: 15px;
			box-shadow: 0 0 2px rgba(0,0,0,0.5);
			border-radius: 5px;
			border: 0;
			background-color: #D5DCF9;
		}

		button {
			border: none;
			appearance: none;
			padding: 0.5rem 1.25rem;
			border-radius: 20px;
			background-color:  #F8FA90;
			font-weight: bold;
			cursor: pointer;

			&:hover {
				background-color: darken(#F8FA90, 20%);
			}
		}

		#entities {
			color: #2B2D42;

			& * {
				font-family: "Montserrat";
				font-weight: 400;
				font-size: 1rem;
			}

			.entity {
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 15px;
				box-shadow: 0 0 4px rgba(0,0,0,0.2);
				background-color: white;

				.card-left {
					flex-shrink: 1;

					img {
						height: 60px;
						width: 60px;
						object-fit: cover;
						border-radius: 50%;
						box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2);
					}
				}

				.card-right {
					flex: 1;
					padding: 0 1rem;

					h4 {
						font-weight: bold;
						margin-top: 0;
					}

					blockquote {
						border-left: 2px solid rgba(0,0,0,0.1);
						padding-left: 1rem;
						margin-left: 0;

						&:after, &:before {

						}
					}

					.buttons {
						button {
							box-shadow: 2px 1px 2px rgba(0,0,0,0.2);
						}

						button:not(:first-child) {
							margin-left: 0.5rem;
						}
					}
				}
			}
		}
	}

	input {
		font-size: 1rem;
	}
</style>
