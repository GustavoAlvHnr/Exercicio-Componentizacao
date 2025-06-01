import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/* import specific icons */
import { faMagnifyingGlass, faUser, faShoppingCart, faHeart as fasFaHeart, faEnvelope, faTruck, faStar, faBookOpen, faPhone, faClock} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(fas, far, fab, faMagnifyingGlass, fasFaHeart, farFaHeart, faShoppingCart, faUser, faEnvelope, faTruck, faStar, faBookOpen, faPhone, faClock, faSquareFacebook, faSquareInstagram, faSquareTwitter)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .component('font-awesome-layer-text', FontAwesomeLayersText)
  .use(router)
  .mount('#app')

