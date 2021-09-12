import { ObjectId } from "mongodb";

export class Cuisine {
    _id: ObjectId;
    title: string;
    price: number;

    constructor({ _id, title, price }: Cuisine) {
        this._id = _id;
        this.title = title;
        this.price = price;
    }
}