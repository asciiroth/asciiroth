import { World, Player, Stage } from './';
import { GameStates } from '../enums';

interface StageCache {
	[name: string]: Stage,
}

export class Game {
	private _stages: StageCache,
	private _currentStage: Stage,
	private _world: World;
	private _player: Player

	constructor(
		private _name: string
	) {}

	public get name(): string {
		return this._name;
	}

	public addWorld(world: World): void {
		this._world = world;
	}

	public get world(): World {
		return _world;
	}

	public addPlayer(player: Player): void {
		this._player = player;
	}

	public get player(): Player {
		return this._player;
	}

	public addStage(name: string): void {
		const stage = new Stage(name);
		return this._stages[stage.name] = stage;
	}

	public setStage(name: string): void {
		this._currentStage = this._stages[name];
	}

	public get stage(): Stage {
		return this._currentStage;
	}

	public get stages(): Stages[] {
		return Object.values(this._stages);
	}
}
