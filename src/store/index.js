import { createStore } from 'vuex'
import axios from 'axios'
import http from '@/http'
import pokeapi from '../http/pokeapi'

const store = createStore({
  state: {
    token:'',
    pokemons: [],
    usuario: {}
  }, // state é como se fosse o data

  mutations: {
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
  }, // é para alterar o estado

  actions: {
    fetchPokemons({commit},{gen,pokearray}){
      return new Promise((resolve,reject) => {
        if(gen === 'all'){
          pokeapi.get("pokemon?limit=250&offset=0")
        .then(res => {
          commit('SET_POKEMONS', res.data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
        }else if(gen === 1){
          pokeapi.get("pokemon?limit=151&offset=0")
            .then(res => {
              commit('SET_POKEMONS', res.data.results)
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        }else if(gen === 2) {
          pokeapi.get("pokemon?limit=100&offset=151")
            .then(res => {
              commit('SET_POKEMONS', res.data.results)
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        }else if(gen === 3) {
          pokeapi.get("pokemon?limit=135&offset=251")
            .then(res => {
              commit('SET_POKEMONS', res.data.results)
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        }else if(gen === 4) {
          pokeapi.get("pokemon?limit=108&offset=386")
            .then(res => {
              commit('SET_POKEMONS', res.data.results)
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        }else if(gen === 5){
          pokeapi.get("pokemon?limit=155&offset=494")
          .then(res => {
            commit('SET_POKEMONS', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
        }else if(gen === 6){
          pokeapi.get("pokemon?limit=72&offset=649")
          .then(res => {
            commit('SET_POKEMONS', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
        }else if(gen === 7){
          pokeapi.get("pokemon?limit=88&offset=721")
          .then(res => {
            commit('SET_POKEMONS', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
        }else if(gen === 8){
          pokeapi.get("pokemon?limit=121&offset=809")
          .then(res => {
            commit('SET_POKEMONS', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
        }
      })
    },

    setPokemonsById({commit},{pokearray}){
      var pokemons_buffer = []

      pokearray.forEach((id,i) => {
        
        var pokemon_transfer_obj = {
          url: `https://pokeapi.co/api/v2/pokemon/${id}/`
        }

        pokemons_buffer[i] = pokemon_transfer_obj
      })
      commit('SET_POKEMONS',pokemons_buffer)
    },

    fetchPokemonData({commit},{index,url}){
      return new Promise((resolve,reject) => {
        axios.get(url)
          .then(res =>{
            var pokemon_transfer_obj = {
              name: res.data.name,
              types: res.data.types,
              stats: res.data.stats,
              id: res.data.id
            }
            
            commit('SET_POKEMON_DATA',{index: index, pokemonD: pokemon_transfer_obj})
            resolve(res)
          }).catch(err => {
            reject(err)
          })
      })
    },

    sendLoginData({ commit },payload){
      return new Promise((resolve,reject) => {
        http.post('auth/login',payload)
        .then(res => {
            var token = res.data.access_token
            commit('SET_TOKEN',{token})
            resolve(res)
        })  
        .catch(err => {
            console.log("Erro ao efetuar login " + err)
            reject()
        })
      })
    },

    fetchUserData({commit,state}){
      return new Promise((resolve,reject) => {
        http.get('userdata',{headers: {"Authorization" : `Bearer ${state.token}`}})
        .then(res => {
          commit('SET_USER_DATA',{user: res.data.usuario})
          resolve()
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  }, // vai te dar ações dentro de um determinado contexto, pode utilizar sua logica para utilizar a mutation para mudar o estado, ele faz o commit no estado. só usa action, quando precisa de promessa
  
  getters: {
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
})

export default store