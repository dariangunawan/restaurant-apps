import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = `
        <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
      `;
    }
  },
};

export default Favorite;
