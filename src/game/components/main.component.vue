<template>
	<div id="asciiroth">
		<div id="grid">
			<div id="top">
				<div class="left">
					<!-- <h2>{{ player.zone.name }} <span class="small">{{ player.location.name }}</span></h2> -->
					<!-- <p>entities in this location {{ player.entities }}</p> -->
					<h3>Around you, you see:</h3>
					<div id="entities">
						<div
							class="entity"
							:class="{ friend: entity.friendly, enemy: !entity.friendly }"
							v-for="entity in player.location.entities"
						>
							<div class="entity-left">
								<div class="background" :style="{ width: ( entity.hp / entity.maxHp ) * 100 + '%'}"></div>
								<img :src="entity.custom.image" class="circle">
								<span>{{ entity.name | capitalize }}</span>
							</div>
							<div class="entity-right">
								<button
									type="button"
									name="button"
									v-for="action in entity.actions"
									@click="callGameAction(action, [entity.name])"
								>
									{{ action | capitalize }}
								</button>
							</div>
							<!-- <div class="card-left">
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
							</div> -->
						</div>
					</div>
				</div>
				<div class="right"></div>
			</div>
			<div id="bottom">
				<div class="left">
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
				<div class="right"></div>
			</div>
		</div>
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
				friendly: true,
				actions: [ 'talk' ],
				custom: {
					image: 'https://gamepedia.cursecdn.com/wowpedia/7/7a/Charactercreate-races_human-female.png?version=708cfbd211c07e688fbae08140874518',
				},
			});

			const wolf = game.newNpc({
				name: 'Wolf',
				referenceNames: ['Wolf'],
				description: 'A vicious wolf!',
				actions: [ 'attack' ],
				friendly: false,
				custom: {
					image: 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_wolf.jpg',
				},
			});

			const location1 = game.newLocation({
				name: 'Location 1',
				entities: [
					abby,
					wolf,
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
				this.callGameAction(command, args);
			},
			callGameAction(command: string, args: string[]) {
				this.game.addOutput(`${ command } ${ args.join(' ') }`);

				this.currentInput = '';

				this.game.action(command, args);
			}
		},
		computed: {
			player() {
				return this.game.player;
			},
		},
		filters: {
			capitalize(value: string): string {
				if (!value) return ''
				value = value.toString()
				return value.charAt(0).toUpperCase() + value.slice(1);
			},
			transformActionIcon(value: string): string {
				switch (value) {
					case 'trade':
						return 'https://wow.zamimg.com/images/wow/icons/large/inv_tradeskillitem_01.jpg';
					case 'talk':
						return 'https://image.flaticon.com/icons/png/512/130/130958.png';
					case 'attack':
						return 'https://wow.zamimg.com/images/wow/icons/large/ability_steelmelee.jpg';
					default:
						return '#';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin hideScrollBars {
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			width: 0 !important;
		}
	}

	#grid {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;

		#top, #bottom {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			max-height: 50%;
		}

		.left, .right {
			flex: 1;
			height: 100%;
			max-height: 100%;
			overflow: auto;
			@include hideScrollBars;
		}
	}

	.left {
		h3 {
			font-family: "Luckiest Guy";
			font-weight: 400;
			font-size: 1.75rem;
			margin-top: 0;
			color: white;
			padding: 1rem 0 0 0;
			margin-bottom: 5px;
			text-align: center;

			.small {
				font-family: "Poiret One";
				color: darken(white, 15%);
				font-size: 1.25rem;
				display: block;
			}
		}
	}

	#entities {
		padding: 16px;
		color: #2B2D42;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;

		& * {
			font-family: "Montserrat";
			font-weight: 400;
			font-size: 1rem;
		}

		.entity {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			background-color: white;
			border: 0;
			border-radius: 50px;
			box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
			margin-bottom: 1rem;
			margin-right: 1rem;

			.entity-left {
				flex-shrink: 1;
				padding: 5px 30px 5px 10px;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				border-radius: 50px;
				box-shadow: 0 2px 4px rgba(0,0,0,0.2);
				position: relative;
				overflow: hidden;

				.background {
					background-color: #82BEE9;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					z-index: 1;
					transition: width .2s ease-in-out;
				}

				img {
					margin-right: 1rem;
					box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
					z-index: 2;
				}

				span {
					font-weight: bold;
					color: white;
					font-size: 1.75rem;
					text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
					z-index: 2;
				}
			}

			.entity-right {
				flex-grow: 1;
				flex-basis: 1;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding: 0 1rem;

				button {
					margin-right: 1rem;
					box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
					appearance: none;
					border: none;
					border-radius: 50px;
					background-color: #FFDE68;
					overflow: hidden;
					padding: 0.75rem 1rem;
					cursor: pointer;
					display: flex;
					align-items:center;
					justify-content: center;
					color: white;
					font-weight: bold;

					&:hover {
						filter: brightness(80%);
					}
				}
			}

			.circle {
				height: 60px;
				width: 60px;
				border-radius: 50%;
			}

			&.enemy {
				.entity-left {
					.background {
						background-color: #FE4A49;
					}
				}
			}
		}

	}

	#bottom .left {
		padding: 16px;
		color: white;
	}

	input {
		font-size: 1rem;
	}
</style>
