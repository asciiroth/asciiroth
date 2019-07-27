import Npc from '../classes/npc.class';
import { EntityActions } from '../enums';

class AbbyClass extends Npc {
	constructor() {
		super({
			referenceNames: ['Abby'],
			name: 'Abby',
			description: 'A lady stand before the Abbey and greets new adventurers.',
			friendly: true,
			hp: 100,
			strength: 100,
			defence: 100,
			actions: [
				EntityActions.Talk,
			],
			speech: {
				default: 'hello there young one...',
			}
		})
	}
}

export const Abby = new AbbyClass();
