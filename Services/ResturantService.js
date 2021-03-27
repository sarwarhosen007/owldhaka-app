import http from "../Http/http-common";

const getRestaurantList = () =>{
    return http.get('/restaurant/getRestaurantList');
}


export default {
    getRestaurantList
  };