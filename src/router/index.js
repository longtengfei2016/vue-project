import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/body'
import Index from '@/pages/index'
import Topic from '@/pages/topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: Body,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'topic',
          name: 'topic',
          component: Topic
        }
      ]
    }
  ]
})
