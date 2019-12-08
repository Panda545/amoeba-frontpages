import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faAngleUp, faAngleDown, faLock, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

[faStar, faAngleUp, faAngleDown, faLock, faPlayCircle]
  .forEach(icon => library.add(icon))

Vue.component('FaIcon', FontAwesomeIcon)

