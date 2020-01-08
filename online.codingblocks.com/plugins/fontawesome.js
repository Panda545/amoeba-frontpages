import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faAngleUp, faAngleDown, faLock, faPlayCircle, faChartPie, faSearch, faGraduationCap, faVideo, faSuitcase, faSlash, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

[
  faStar, faAngleUp, faAngleDown, faLock, faPlayCircle,
  faChartPie, faSearch, faGraduationCap, faVideo, faSuitcase,
  faBell, faShoppingCart
]
  .forEach(icon => library.add(icon))

Vue.component('FaIcon', FontAwesomeIcon)
