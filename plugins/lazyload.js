import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  error: '/img/img_error.png',
  loading: '/img/img_loading.png'
})
