import { EntityProperties, EntityActions } from '../enums';

export class Entity {
	public id: string;
	public referenceName: string;
	public description: string;
	public actions: EntityActions[];

	constructor(options: EntityProperties){
		Object.assign(this, options);
	}

	public setId(id: string) {
		this.id = id;
	}

	public hasAction(action: EntityActions): boolean {
		if (this.actions.includes(action)){
			return true;
		}

		return false;
	}
}
