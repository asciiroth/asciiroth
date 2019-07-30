export class Stage {
	public constructor(
		private _name: string,
		private _id?: string,
	) {
		if (!this._id) {
			this._id = performance.now();
		}
	}
}
