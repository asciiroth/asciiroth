import Entity from './entity.class';
import Npc from './npc.class';

const generateId = (): string => {
	return `e_${ performance.now() }`;
}

export default class Location {
	public entities: (Entity | Npc)[] = [];

	constructor(
		public readonly name: string,
		public readonly description: string,
		public readonly image: string,
		entities: (Entity | Npc)[] = [],
	){
		entities.forEach(entity => this.addEntity(entity));
	}

	public addEntity(entity: any) {
		entity.setId(generateId());
		this.entities.push(entity);
	}

	public removeEntity(entityId: string) {
		this.entities = this.entities.filter(({ id }) => id !== entityId);
	}

	public findEntity(name: string): Partial<Npc> | Partial<Entity> {
		if (!name) {
			return null;
		}
		return this.entities.find(({ referenceNames }) => referenceNames.includes(name.toLowerCase()));
	}
}
