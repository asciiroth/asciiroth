import { Npc } from '../classes';
import { EntityActions } from '../enums';

export class Murloc extends Npc {
    constructor() {
        super({
            referenceNames: ['Murloc', 'gmmmlmrmrgmg'],
            name: 'Murloc',
            description: 'A strange, mean amphibian!',
            friendly: false,
            hp: 15,
            strength: 2,
            defence: 2,
            actions: [
                EntityActions.Attack,
            ],
        })
    }
}
