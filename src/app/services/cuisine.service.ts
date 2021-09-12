import { Collection } from './../../models/collection';
import { getConnection } from '../../utils/connection.util';
import { Messages } from './../../configs/messages';
import { HttpCodes } from './../../models/http-codes';
import { Cuisine } from '../../models/cuisine';

export class CuisineService {
    status: any = null;

    search = async (term: string) => {
        try {
            const connection = await getConnection();
            const title = new RegExp(term, 'ig');
            const result = await connection
            .collection(Collection.cuisines)
            .aggregate([
                { 
                    $match: {
                        title 
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
            const result = await connection.collection(Collection.cuisines).deleteMany({});
            
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

    insertMany = async (cuisines: Cuisine[]) => {
        try {
            const connection = await getConnection();
            const result = await connection.collection(Collection.cuisines).insertMany(cuisines);
            
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
}