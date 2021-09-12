import { Restaurant } from './../../models/restaurants';
import { Collection } from './../../models/collection';
import { getConnection } from '../../utils/connection.util';
import { Messages } from './../../configs/messages';
import { HttpCodes } from './../../models/http-codes';

export class RestaurantService {
    status: any = null;

    search = async (term: string) => {
        try {
            const connection = await getConnection();
            const keyword = new RegExp(term, 'ig');
            const result = await connection
            .collection(Collection.restaurants)
            .aggregate([
                { 
                    $match: {
                        $or: [
                            {
                                name: keyword
                            },
                            {
                                place: keyword
                            }
                        ]
                    }
                }
            ])
            .toArray();

            return {
                result,
                status: HttpCodes.ok,
                message: Messages.generalSuccess
            }
        } catch ({ message }) {
            return {
                result: null,
                status: this.status,
                message
            }
        }
    }

    deleteMany = async () => {
        try {
            const connection = await getConnection();
            const result = await connection.collection(Collection.restaurants).deleteMany({});
            this.status = HttpCodes.ok;

            return {
                result,
                status: this.status,
                message: Messages.generalSuccess
            }
        } catch ({ message }) {
            return {
                result: null,
                status: this.status,
                message
            }
        }
    }

    insertMany = async (restaurants: Restaurant[]) => {
        try {
            const connection = await getConnection();
            const result = await connection.collection(Collection.restaurants).insertMany(restaurants);
            this.status = HttpCodes.ok;

            return {
                result,
                status: this.status,
                message: Messages.generalSuccess
            }
        } catch ({ message }) {
            return {
                result: null,
                status: this.status,
                message
            }
        }
    }
}