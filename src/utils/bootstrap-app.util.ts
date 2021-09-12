import { cuisines } from '../configs/cuisines';
import { restaurants } from '../configs/restaurants';
import { RestaurantService } from '../app/services/restaurant.service';
import { CuisineService } from '../app/services/cuisine.service';

export const resetDatabase = async () => {
    try {
        const restaurantService = new RestaurantService();
        const cuisineService = new CuisineService();

        await restaurantService.deleteMany();
        await cuisineService.deleteMany();

        await restaurantService.insertMany(restaurants);
        await cuisineService.insertMany(cuisines);
    } catch (error) {
        throw new Error(error.message);
    }
}

export const resetCuisines = async () => {
    
}