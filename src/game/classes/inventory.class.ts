export class Inventory {
	private _items: number[] = [];

	public constructor(...itemIds: number[]) {
		this.add(itemIds);
	}

	public has(id: number, amount?: number) {
		// if items has all the ids, return true
	}

	public get list(): any[] {
		return this._items;
	}

	public add(id: number | number[]) {
		if (typeof id === 'number'){
			this._items.push(id);
			return;
		}

		this._items = [
			...this.list,
			...id,
		];
	}

	public remove(id: number, amount?: number) {
		this._items = [...this._items].filter(itemId => itemId !== id);
	}
}
