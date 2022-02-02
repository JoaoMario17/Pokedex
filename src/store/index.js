import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const store = createStore({
  state: {
    token:'',
    pokemons: [],
    usuario: {}
  },
  mutations,
  actions,
  getters,
})

export default store