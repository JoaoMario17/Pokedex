<template>
  <div class="container">
      <ul v-if="isFetched" class="pokemon-wrapper">
        <li v-for="pokemon in getPokemons" :key="pokemon.name">
          <pokemon-card :url="pokemon.url"/>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PokemonCard from '../components/PokemonCard.vue'

export default {
  components: {
    'pokemon-card': PokemonCard
  },
  created(){
    this.fetchPokemons({gen:1})
    .then(()=>{
      this.isFetched = true
    })
    .catch(err => console.log(err))
  },
  updated(){
    window.scrollTo(0,0);
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

<style scoped lang="stylus">
  * 
    color: black;
    .container
      height: auto
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 150px
    .pokemon-wrapper
      width: 90%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      list-style: none;
</style>