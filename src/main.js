import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.config.productionTip = false

Vue.use(TiptapVuetifyPlugin, {

  vuetify,
  iconsGroup: 'mdi'
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
