import { ObjectId } from "mongodb";

export class Cuisine {
    _id: ObjectId;
    title: string;
    price: number;
    image: string;

    constructor({ _id, title, price, image }: Cuisine) {
        this._id = _id;
        this.title = title;
        this.price = price;
        this.image = image;
    }
}