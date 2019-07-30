import InventoryClass from './inventory.class';
import Npc from './npc.class';
import { EntityDirections, EntityActions, Races, Classes } from '../enums';
import World from './world.class';

export interface SpeechTree {
    [entityId: string]: string;
}

export interface SpeechBranch {
    // Not used yet
}

export interface PlayerProperties {
    xp?: number;
    name: string;
    race: Races;
    class: Classes;
    coords: [number, number];
    world: World,
    speechCache?: SpeechTree,
}

export interface PlayerAction {
    action: EntityActions;
    data: PlayerActionPayload;
}

export interface PlayerActionPayload {
    direction?: EntityDirections
    args?: string[];
    hp?: number;
}

export class Player {
    public inventory: InventoryClass = new InventoryClass();
    public xp: number = 0;
    public name: string;
    public race: Races; // Todo: RaceEnum
    public class: Classes; // Todo: ClassEnum
    public petName?: string; // For hunters maybe
    public _spells: number[];
    private quests: any[]; // Need to just figure out the tiny detail of quests
    public coords: [number, number] = [0, 0];
    public world: World;
    public maxHp: number = 10;
    public hp: number = 10;
    public strength: number = 5;
    public defence: number = 5;
    public combatSelectedEnemy: Partial<Npc>;
    public completedIntroduction: boolean = false;

    constructor(options: PlayerProperties) {
        Object.assign(this, options);
    }

    public get spells() {
        return this._spells.map(spellId => spellId); // Map all ids to actual spells
    }

    public hasCompleted(...questIds: number[]) {
        return questIds.reduce((completedAll, questId) => {
            if (!completedAll) {
                return false;
            }

            return;
            // return ifCompleted(questId);
        }, true);
    }

    public action(payload: PlayerAction) {
        switch (payload.action) {
            case EntityActions.Walk:
                const [x, y] = this.coords;
                const [direction] = payload.data.args;
                switch (EntityDirections[direction]) {
                    case EntityDirections.North:
                        if (this.world.areCoordsInGrid(x, y + 1)) {
                            this.coords = [x, y + 1];
                            return true;
                        } else {
                            return false;
                        }
                    case EntityDirections.East:
                        if (this.world.areCoordsInGrid(x + 1, y)) {
                            this.coords = [x + 1, y];
                            return true;
                        } else {
                            return false;
                        }
                    case EntityDirections.South:
                        if (this.world.areCoordsInGrid(x, y - 1)) {
                            this.coords = [x, y - 1];
                            return true;
                        } else {
                            return false;
                        }
                    case EntityDirections.West:
                        if (this.world.areCoordsInGrid(x - 1, y)) {
                            this.coords = [x - 1, y];
                            return true;
                        } else {
                            return false;
                        }
                    default:
                        return false;
                }
            case EntityActions.Talk:
                break;
            case EntityActions.Attack:
                this.removeHp(payload.data.hp);
                break;
        }
    }

    public setName(name: string) {
        this.name = name;
    }

    public setRace(race: Races) {
        this.race = race;
    }

    public setClass(playerClass: Classes) {
        this.class = playerClass;
    }

    public removeHp(amount: number): number {
        return this.hp -= amount;
    }

    public addHp(amount?: number): number {
        if (amount) {
            return this.hp += amount;
        }

        return this.hp = this.maxHp;
    }
}
