import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'inicioView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/veiculo',
    name: 'Veiculo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoView.vue')
  },

  {
    path: '/veiculo/cadastrar',
    name: 'VeiculoCadastrar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoCadastrar.vue')
  },

  {
    path: '/veiculo/editar',
    name: 'VeiculoEditar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Veiculo/VeiculoEditar.vue')
  },



  {
  path: '/menuveiculo',
  name: 'MenuVeiculo',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/VeiculosMenu.vue')
},
  
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracoes/ConfiguracoesView.vue')
  },

  {
    path: '/movimentacoes',
    name: 'MovimentacaoVue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacoes/Movimentacao.vue')
  },
{
    path: '/movimentacoes/cadastrar',
    name: 'MovimentacaoNewVue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacoes/MovimentacaoNew.vue')
  },

  {
    path: '/movimentacoes/editar',
    name: 'MovimentacaoEditar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movimentacoes/MovimentacaoEdit.vue')
  },


  {
    path: '/condutor',
    name: 'Condutor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorView.vue')
    
    
  
  },
  {
    path: '/condutor/editar',
    name: 'CondutorEditar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorEditar.vue')
  },
  {
    path: '/condutor/cadastrar',
    name: 'CondutorCadastrar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Condutor/CondutorCadastrar.vue')
  },
  {
    path: '/marca',
    name: 'MarcaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/Marca.vue')
  },

  {
    path: '/marca/cadastrar',
    name: 'MarcaCadastrarView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/MarcaCadastrar.vue')
  },

  {
    path: '/marca/editar',
    name: 'MarcaEditar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/MarcaEditar.vue')
  },



  {
    path: '/modelo',
    name: 'ModeloView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/Modelo.vue')
  },

  {
    path: '/modelo/cadastrar',
    name: 'ModeloCadastrarView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ModeloCadastrar.vue')
  },
  {
    path: '/modelo/editar',
    name: 'ModeloEditar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Modelo/ModeloEditar.vue')
  }




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
