import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PlantMom from '@/components/PlantMom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlantMom',
      component: PlantMom
    }
  ]
})
