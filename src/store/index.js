import { createStore } from "vuex"

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
