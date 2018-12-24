import Vuex from 'vuex'
import ENV from './env.js'
import YEWULINGYU from './yeWuLingYu.js'
export const store = new Vuex.Store({
  modules: {
    ENV: ENV,
    YEWULINGYU: YEWULINGYU
  }
})
