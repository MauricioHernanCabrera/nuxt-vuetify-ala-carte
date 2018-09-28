import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VGrid,
  transitions
} from 'vuetify'
import { Ripple, Scroll, ClickOutside } from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    transitions
  },
  directives: {
    Ripple, Scroll, ClickOutside
  },
  options: {
    minifyTheme (css) {
      return css.replace(/[\s|\r\n|\r|\n]/g, '')
    }
  }
})
