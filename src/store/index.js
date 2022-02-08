import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const store = createStore({
  state: {
    token:'',
    pokemons_urls: [],
    favpokemons_url: [],
    favpokemons_data: [],
    usuario: {}
  },
  mutations,
  actions,
  getters,
})

export default store