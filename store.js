import {createStore} from "vuex";

export const store = createStore({
  //state is a very similar concept to data, which also needs to return an object
  state() {
    return {
      count: 1
    }
  },

  mutations: {
    //always receives state as 1st argument
    increment(state, number) {
      state.count += number
    }
  }
})