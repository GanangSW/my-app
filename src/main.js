import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import ScrollAnimation from './directive/scrollanimation'


Vue.directive('scrollanimation',ScrollAnimation);
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
