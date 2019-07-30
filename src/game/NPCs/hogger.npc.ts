import { Npc } from '../classes';
import { EntityActions } from '../enums';

class HoggerClass extends Npc {
    constructor() {
        super({
            referenceNames: ['Hogger'],
            name: 'Hogger',
            description: 'A fierce Gnoll, barking orders at his lackies!',
            friendly: false,
            hp: 25,
            strength: 8,
            defence: 8,
            actions: [
                EntityActions.Attack,
            ],
        })
    }
}

export const Hogger = new HoggerClass();
