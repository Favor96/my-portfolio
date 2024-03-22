import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutMe from '@/views/AboutMe.vue'
import Index from '@/views/Index.vue'
import Contact from '@/components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        { path: '', component: HomePage , name:'home', meta: {showFirstChild : true}},
        { path: 'about', component: AboutMe, name:'aboutMe', meta: {showFirstChild2 : true}},
        { path: 'contact', component: Contact, name:'contact' },
      ]
    },
  ]
})

export default router
