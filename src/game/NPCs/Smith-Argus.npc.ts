import { Npc } from '../classes';
import { EntityActions } from '../enums';

class SmithArgusClass extends Npc {
	constructor() {
		super({
			referenceNames: ['Argus', 'blacksmith', 'smith'],
			name: 'Smith Argus',
			description: 'A coal-covered smith, hard at work.',
			friendly: true,
			hp: 100,
			strength: 100,
			defence: 100,
			actions: [
				EntityActions.Talk,
			],
			speech: {
				default: 'I\'m sorry, I\'m a bit busy right now making horseshoes for Verner Osgood in Lakeshire.',
			}
		})
	}
}

export const SmithArgus = new SmithArgusClass();
