import Npc from '../classes/npc.class';
import { EntityActions } from '../enums';

export class Wolf extends Npc {
    constructor() {
        super({
            referenceNames: ['Wolf'],
            name: 'Wolf',
            description: 'A mean looking beast!',
            friendly: false,
            hp: 10,
            strength: 1,
            defence: 1,
            actions: [
                EntityActions.Attack,
            ],
        })
    }
}
