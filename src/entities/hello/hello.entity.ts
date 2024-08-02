export class Hello {
	private _greetings: string;

	constructor(_greetingsSubject?: string) {
		if (_greetingsSubject) {
			this._greetings = `Hello, ${_greetingsSubject}!`;
		} else this._greetings = 'Hello world!';
	}

	public get greetings(): string {
		return this._greetings;
	}
}
