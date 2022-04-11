import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/TelaLogin.vue'
import TelaPerfil from '../pages/TelaPerfil.vue'
import Cadastro from '../pages/TelaCadastroUsuario.vue'
import Pokemons from '../pages/Pokemons.vue'
import Admin from '../pages/TelaAdmin.vue'
import store from  '@/store'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: TelaPerfil,
    meta: {
      public: false
    }
  },
  {
    path: '/login',
    name: 'Index',
    component: Login,
    meta: {
      public: true
    }
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
    meta: {
      public: true
    }
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: Pokemons,
    meta: {
      public: false
    },
  },
  {
    path: '/admin',
    name: 'Administrador',
    component: Admin,
    meta: {
      public: false
    },
  }
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((routeTo,routeFrom, next) => {
  if(!routeTo.meta.public && !store.state.token) {
    return next({ path: '/login'})
  }
  next()
})

export default router