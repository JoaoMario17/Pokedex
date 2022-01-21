import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/screens/TelaLogin.vue'
import TelaEditarUsuario from '../components/screens/TelaEditarUsuario.vue'
import TelaPerfil from '../components/screens/TelaPerfil.vue'
import Cadastro from '../components/screens/TelaCadastroUsuario.vue'
import Pokemons from '../components/screens/Pokemons.vue'
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
    path: '/edit',
    name: 'Edicao',
    component: TelaEditarUsuario,
    meta: {
      public: false
    }
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: Pokemons,
    meta: {
      public: false
    }
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