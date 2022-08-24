interface ISli {
	bindJSON(file: string): boolean;
	registerAction(action: Function): boolean;
	run(): void;
}
