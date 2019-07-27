import Npc from '../classes/npc.class';
import { EntityActions } from '../enums';

class MarshalMcBrideClass extends Npc {
	constructor() {
		super({
			referenceNames: ['Marshal', 'McBride', 'Marshal McBride'],
			name: 'Marshal McBride',
			description: 'A confident knight standing at the Abbey to greet new recruits and aventurers.',
			friendly: true,
			hp: 100,
			strength: 100,
			defence: 100,
			actions: [
				EntityActions.Talk,
			],
			speech: {
				default: 'Hey, citizen! You look like a stout one. We guards are spread a little thin out here, and I could use your help...',
			}
		})
	}
}

export const MarshalMcBride = new MarshalMcBrideClass();
