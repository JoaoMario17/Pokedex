const mutations = {
  SET_TOKEN(state,{token}){
    state.token = token
  },
  CLEAN_POKEMONS_URL(state){
    state.pokemons_urls = []
  },
  SET_POKEMONS_URL(state,pokemons){
    state.pokemons_urls = pokemons
  },
  SET_FAVPOKEMONS_URL(state,pokemons){
    state.favpokemons_url = pokemons
  },
  SET_USER_DATA(state,{user}){
    state.usuario.id = user.id
    state.usuario.nome = user.nome
    state.usuario.email = user.email
    state.usuario.favpokemons = user.favpokemons
  },
  CLEAN_TOEKEN(state) {
    state.token = null;
  },
  REMOVE_FAV_POKEMON(state,id){
    const index = state.usuario.favpokemons.indexOf(id)
    state.usuario.favpokemons.splice(index,1)
  },
  ADD_FAV_POKEMON(state,id) {
    state.usuario.favpokemons.push(id)
  }
}

export default mutations