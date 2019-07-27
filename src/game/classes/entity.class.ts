import { EntityProperties, EntityActions } from '../enums';

export default class Enitity {
	public id: string;
	private readonly _referenceNames: string[];
	public name: string;
	public description: string;
	public actions: EntityActions[];

	constructor(options: EntityProperties){
		this._referenceNames = options.referenceNames;
		delete  options.referenceNames;
		
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

	public get referenceNames(): string[] {
		return this._referenceNames.map(name => name.toLowerCase());
	}
}
