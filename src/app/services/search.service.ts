import { RestaurantService } from './restaurant.service';
import { CuisineService } from './cuisine.service';
import { Messages } from './../../configs/messages';
import { HttpCodes } from './../../models/http-codes';

const cuisineService: CuisineService = new CuisineService();
const restaurantService: RestaurantService = new RestaurantService();

export class SearchService {
    status: any = null;

    constructor() {}

    search = async (term: string) => {
        try {
            const { result : restaurants } = await restaurantService.search(term);
            const { result : cuisines } = await cuisineService.search(term);

            if (!(restaurants && restaurants.length) && !(cuisines && cuisines.length)) {
                this.status = HttpCodes.notFound;
                throw new Error(Messages.notFound);
            }
            const result = [...(restaurants ? restaurants : []), ...(cuisines ? cuisines : [])];

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