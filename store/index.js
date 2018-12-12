import Vuex from 'vuex'
import ENV from './env.js'
export const store = new Vuex.Store({
  modules: {
    ENV: ENV
  }
})
