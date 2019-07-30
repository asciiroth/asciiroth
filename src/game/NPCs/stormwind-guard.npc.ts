import { Npc } from '../classes';
import { EntityActions } from '../enums';

export class Guard extends Npc {
	constructor() {
		super({
			referenceNames: ['guard'],
			name: 'Guard',
			description: 'A righteous, armour-clad knight stood on protect of the city.',
			friendly: true,
			hp: 100,
			strength: 100,
			defence: 100,
			actions: [
				EntityActions.Talk,
			],
			speech: {
				default: 'I used to be an adventurer like you... Until I took a [dirge] to the knee...',
			}
		})
	}
}
