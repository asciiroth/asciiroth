import EntityClass from './entity.class';
import { NpcProperties, EntityActions } from '../enums';

export interface NpcAction {
    action: EntityActions;
    data: NpcActionPayload;
}

export interface NpcActionPayload {
    talkSubject?: string;
    hp?: number;
}

export interface Speech {
    [id: string]: string | Speech;
}

export class Npc extends EntityClass {
    public id: string;
    public speech: Speech;
    public hp: number = 5;
    public strength: number = 5;
    public defence: number = 5;
    public friendly: boolean = true;

    constructor(options: NpcProperties) {
        super(options);
        Object.assign(this, options);
    }

    public action(payload: NpcAction) {
        switch (payload.action) {
            case EntityActions.Talk:
                switch (payload.data.talkSubject) {
                    default:
                        return this.speech.default;
                }
            case EntityActions.Attack:
                this.removeHp(payload.data.hp)
                break;
        }
    }

    public removeHp(amount: number): number {
        return this.hp -= amount;
    }
}
