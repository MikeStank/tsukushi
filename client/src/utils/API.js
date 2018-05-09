import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomProduct: function() {
    // return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getProductsByType: function(breed) {
    // return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBaseProductsList: function() {
    // return axios.get("https://dog.ceo/api/breeds/list");
  }
};
