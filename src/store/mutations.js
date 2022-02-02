const mutations = {
  SET_TOKEN(state,{token}){
    state.token = token
  },
  SET_POKEMONS(state,pokemons){
    state.pokemons = pokemons
  },
  SET_POKEMON_DATA(state,{index,pokemonD}){
    state.pokemons[index].name = pokemonD.name
    state.pokemons[index].types = pokemonD.types
    state.pokemons[index].stats = pokemonD.stats
    state.pokemons[index].stats = pokemonD.id
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