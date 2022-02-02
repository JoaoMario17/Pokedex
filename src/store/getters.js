const getters = {
  getUserById: (state) => (id) => {
    return state.usuarios.find(user => user.id === id)
  },
  getPokemons: state =>{
    return state.pokemons
  },
  getPokemonTypes: (state) => (name) =>{
    var target_pokemon = JSON.parse(JSON.stringify(state.pokemons.filter(pokemon => pokemon.name === name)))
    console.log(target_pokemon)
    return null
  },
  getUser: (state) => {
    return state.usuario
  },
  getFavPokemons: (state) => {
    return state.usuario.favpokemons
  }
}

export default getters