import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/detail/:id',
    name: 'DetailTodo',
    component: () => import(/* webpackChunkName: "DetailTodo" */ '../views/DetailTodo.vue')
  },
  {
    path: '/new',
    name: 'NewTodo',
    component: () => import(/* webpackChunkName: "NewTodo" */ '../views/NewTodo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
