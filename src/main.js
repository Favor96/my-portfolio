import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser  } from '@fortawesome/free-regular-svg-icons'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


import { faTwitter, faInstagram, faLinkedin,faAmazon,faMicrosoft,faApple} from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faUser, faTwitter, faInstagram, faLinkedin,faArrowDown, faAmazon, faMicrosoft,faApple)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
