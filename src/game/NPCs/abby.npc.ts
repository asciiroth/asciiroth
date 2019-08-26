// import {
// 	Npc,
// } from '@asciiroth/core';
//
// export class AbbyClass extends Npc {
// 	constructor() {
// 		super({
// 			referenceNames: ['Abby'],
// 			name: 'Abby',
// 			description: 'A lady stand before the Abbey and greets new adventurers.',
// 			friendly: true,
// 			hp: 100,
// 			strength: 100,
// 			defence: 100,
// 			speech: {
// 				default: 'hello there young one...',
// 			}
// 		})
// 	}
// }

import {
	ClassData,
	RaceData,
	FactionData,
} from '../data';

export const NpcAbby = {
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
		race: 'Human',
		class: ClassData.Priest,
	},
}
