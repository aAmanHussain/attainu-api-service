import { ObjectId } from 'mongodb';

export class Restaurant {
    name: string;
    place: string;
    cuisines: ObjectId[];

    constructor({ name, place, cuisines }: Restaurant) {
        this.name = name;
        this.place = place;
        this.cuisines = cuisines;
    }
}