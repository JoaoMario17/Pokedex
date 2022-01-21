<template>
  <div class="container">
      <ul v-if="isFetched" class="pokemon-wrapper">
        <li v-for="(pokemon,index) in getPokemons" :key="pokemon.name">
          <pokemon-card :pokemon_index="index" :url="pokemon.url"/>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PokemonCard from '../shared/PokemonCard.vue'

export default {
  components: {
    'pokemon-card': PokemonCard
  },
  created(){
    this.fetchPokemons({gen:'all'})
    .then(()=>{
      this.isFetched = true
    })
    .catch(err => console.log(err))
  },
  data(){
    return {
      isFetched: false
    }
  },
  methods: {
    ...mapActions([
      'fetchPokemons',
    ])
  },
  computed: {
    ...mapGetters([
      'getPokemons'
    ])
  }
}
</script>

<style scoped>
  * {
    color: black;
  }

  .container {
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 150px;
  }

  .pokemon-wrapper{
    width: 80%;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    list-style: none;
  }
</style>