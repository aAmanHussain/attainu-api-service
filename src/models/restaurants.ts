import { ObjectId } from 'mongodb';

export class Restaurant {
    name: string;
    place: string;
    image: string;
    cuisines: ObjectId[];

    constructor({ name, place, image, cuisines }: Restaurant) {
        this.name = name;
        this.place = place;
        this.image = image;
        this.cuisines = cuisines;
    }
}