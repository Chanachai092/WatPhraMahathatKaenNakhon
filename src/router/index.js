import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import WatInfo from '../components/WatInfo.vue'
import WatHistory from '../components/WatHistory.vue'
import TouristInfo from '../components/TouristInfo.vue'
import PanoramaViewer from '../components/PanoramaViewer.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/info', component: WatInfo },
  { path: '/history', component: WatHistory },
  { path: '/tourist', component: TouristInfo },
  { path: '/panorama', component: PanoramaViewer },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
