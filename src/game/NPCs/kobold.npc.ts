import { Npc } from '../classes';
import { EntityActions } from '../enums';

export class Kobold extends Npc {
    constructor() {
        super({
            referenceNames: ['Kobold'],
            name: 'Kobold',
            description: 'A gruff, rat-like humanoid wielding a pickaxe and wearing a candle for a hat.',
            friendly: false,
            hp: 15,
            strength: 2,
            defence: 2,
            actions: [
                EntityActions.Attack,
                EntityActions.Talk,
            ],
            speech: {
				default: `You take no candle!`,
			}
        })
    }
}
