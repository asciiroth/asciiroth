import Npc from '../classes/npc.class';
import { EntityActions } from '../enums';

export class Gnoll extends Npc {
    constructor() {
        super({
            referenceNames: ['Gnoll'],
            name: 'Gnoll',
            description: 'A bloody and eratic dog-hyena-like humanoid, definitely not friendly!',
            friendly: false,
            hp: 15,
            strength: 3,
            defence: 3,
            actions: [
                EntityActions.Attack,
            ],
        })
    }
}
