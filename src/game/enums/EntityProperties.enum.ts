import { EntityActions } from './';

export interface EntityProperties {
	id?: number;
	referenceName: string;
	description: string;
	actions: EntityActions[];
}
