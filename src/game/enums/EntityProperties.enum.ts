import { EntityActions } from './';

export interface EntityProperties {
	id?: number;
	referenceNames: string[];
	name: string;
	description: string;
	actions: EntityActions[];
}
