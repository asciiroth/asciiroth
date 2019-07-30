import { Location } from './';
import { EntityDirections } from '../enums/EntityDirections.enum';

export class World {
	private _worldGrid: Location[][];

	public constructor(initialGrid: Location[][]) {
		this.setWorldGrid(initialGrid);
	}

	public setWorldGrid(grid: Location[][]): void {
		this._worldGrid = grid;
	}

	public getWorldLocation(x: number, y: number): Location {
		return this._worldGrid[x][y];
	}

	public areCoordsInGrid(x: number, y: number): boolean {
		return this._worldGrid[x] !== undefined && this._worldGrid[x][y] !== undefined ? true : false;
	}

	public getCurrentAvailableDirections(x: number, y: number): EntityDirections[] {
		const directions = [];

		if (this.areCoordsInGrid(x + 1, y)) {
			directions.push(EntityDirections.East);
		}

		if (this.areCoordsInGrid(x, y - 1)) {
			directions.push(EntityDirections.South);
		}

		if (this.areCoordsInGrid(x - 1, y)) {
			directions.push(EntityDirections.West);
		}

		if (this.areCoordsInGrid(x, y + 1)) {
			directions.push(EntityDirections.North);
		}

		return directions;
	}
}
