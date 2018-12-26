import Vuex from 'vuex'
import ENV from './env.js'
import SMALLIMG from './smallImg.js'
import YEWULINGYU from './yeWuLingYu.js'
export const store = new Vuex.Store({
  modules: {
    ENV: ENV,
    YEWULINGYU: YEWULINGYU,
    SMALLIMG: SMALLIMG
  }
})
