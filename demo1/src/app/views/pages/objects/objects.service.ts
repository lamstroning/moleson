import {Injectable} from '@angular/core';
import {ObjectsModule} from './objects.module';


export class ObjectsService {
	nextId = 0;
	objects: Objects[] = [
		{name: 'Франшиза 1', state: 'Активно', id: 0},
		{name: 'Франшиза 2', state: 'Ождиает', id: 0},
		{name: 'Франшиза 3', state: 'Завершено', id: 0},
		{name: 'Франшиза 4', state: 'Активно', id: 0},
		{name: 'Франшиза 4', state: 'Завершено', id: 0},
		{name: 'Франшиза 5', state: 'Завершено', id: 0},
	];

	constructor() {
		for (const obj of this.objects) {
			obj.id = this.nextId++;
		}
	}
	addNew(newName: string, newState: string) {
		if (newName === undefined) {
			newName = 'Франшиза' + this.nextId;
		}
		if (newState === undefined) {
			newState = 'Активно';
		}
		const newOnj: Objects = {
			name: newName,
			state: newState,
			id: this.nextId++};
		this.objects.push(newOnj);
	}
	removeItem(id: number) {
		if (this.objects.length <= 1) {
			this.objects = undefined;
		} else {
			this.objects.splice(id, 1);
		}
	}
}

export interface Objects {
	name: string;
	state: string;
	id: number;
}
