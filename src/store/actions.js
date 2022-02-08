import axios from 'axios'
import http from '@/http'
import pokeapi from '@/http/pokeapi'

const actions = {
  fetchPokemons({commit},{gen,pokearray}){
    return new Promise((resolve,reject) => {
      if(gen === 'all'){
        pokeapi.get("pokemon?limit=250&offset=0")
      .then(res => {
        commit('CLEAN_POKEMONS_URL')
        commit('SET_POKEMONS_URL', res.data.results)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
      }else if(gen === 1){
        pokeapi.get("pokemon?limit=151&offset=0")
          .then(res => {
            commit('CLEAN_POKEMONS_URL')
            commit('SET_POKEMONS_URL', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      }else if(gen === 2) {
        pokeapi.get("pokemon?limit=100&offset=151")
          .then(res => {
            commit('CLEAN_POKEMONS_URL')
            commit('SET_POKEMONS_URL', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      }else if(gen === 3) {
        pokeapi.get("pokemon?limit=135&offset=251")
          .then(res => {
            commit('CLEAN_POKEMONS_URL')
            commit('SET_POKEMONS_URL', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      }else if(gen === 4) {
        pokeapi.get("pokemon?limit=108&offset=386")
          .then(res => {
            commit('CLEAN_POKEMONS_URL')
            commit('SET_POKEMONS_URL', res.data.results)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      }else if(gen === 5){
        pokeapi.get("pokemon?limit=155&offset=494")
        .then(res => {
          commit('SET_POKEMONS_URL', res.data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      }else if(gen === 6){
        pokeapi.get("pokemon?limit=72&offset=649")
        .then(res => {
          commit('CLEAN_POKEMONS_URL')
          commit('SET_POKEMONS_URL', res.data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      }else if(gen === 7){
        pokeapi.get("pokemon?limit=88&offset=721")
        .then(res => {
          commit('CLEAN_POKEMONS_URL')
          commit('SET_POKEMONS_URL', res.data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      }else if(gen === 8){
        pokeapi.get("pokemon?limit=89&offset=809")
        .then(res => {
          commit('CLEAN_POKEMONS_URL')
          commit('SET_POKEMONS_URL', res.data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      }
    })
  },

  SetFavoritePokemonsUrls({commit},{pokearray}){
    var pokemons_buffer = []

    pokearray.forEach((id,i) => {
      
      var pokemon_transfer_obj = {
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
        id: id
      }

      pokemons_buffer[i] = pokemon_transfer_obj
    })

    commit('SET_FAVPOKEMONS_URL',pokemons_buffer)
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
}

export default actions