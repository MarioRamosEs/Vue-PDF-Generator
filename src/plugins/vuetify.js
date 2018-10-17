import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ca from 'vuetify/es5/locale/ca'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { ca },
    current: 'ca'
  },
})
