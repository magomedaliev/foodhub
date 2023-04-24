import { createStore } from "vuex"

import salad from "../assets/salad.png"
import drink from "../assets/drink.png"
import dessert from "../assets/dessert.png"
import breakfast from "../assets/breakfast.png"

export default createStore({
  state() {
    return {
      counter: 0,
      categories: {
        "salad": "Салаты",
        "drink": "Напитки",
        "dessert": "Десерты",
        "breakfast": "Завтраки"
      },
      foodImages: [
        salad,
        drink,
        dessert,
        breakfast
      ],
      cartItems: [],
      historyCartItems: []
    }
  },
  mutations: {
    handleCounter(state, payload) {
      state.counter = payload;
    }
  }
})
