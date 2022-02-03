<template>
  <div class="container">
    <div class="side-bar">
      <div class="user-img">
        <img src="@/assets/images/moldura_pokedex.png" alt="">
      </div>

      <div class="user-name">
        <h1>{{this.getUser.nome}}</h1>
      </div>
      

      <button id="fav-pokemon">
        <img id="start" src="@/assets/images/StarY.svg" alt="">
        <h1>Favorite Pokemons</h1>
      </button>
    </div>

    <div v-if="isSeted" class="fav-pokemons">
      <ul>
        <li v-for="(pokemon, index) in getPokemons" :key="index">
          <pokemon-card :pokemon_index="index" :url="pokemon.url"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
import PokemonCard from '../components/PokemonCard.vue'

export default{
 components: {
    'pokemon-card': PokemonCard
  },
  created(){
    this.fetchUserData()
    .then(() => {
      //Limpar array de pokemons
      this.$store.state.pokemons = []
      //Definir urls dos pokemons favoritados 
      this.setPokemonsById({pokearray: this.getFavPokemons})
      this.isSeted = true
    })
    .catch(err => console.log(err))
  },
  data(){
    return{
      isSeted: false,
      usuario: {
        nome: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'fetchUserData',
      'setPokemonsById'
    ])
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getFavPokemons',
      'getPokemons'
    ])
  }
}

</script>

<style scoped lang="stylus">
  .container 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 110px;
    display: flex;
    color: black;
    .side-bar
      position: fixed;
      top: 50px;
      left: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 400px;
      height: 100vh;
      background-color: #E7E7E7;
      box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
      .user-img 
        position: relative;
        margin-top: 50px;
        width: 300px;
        height: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color: white;
        border-radius: 6px;
        box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
        position: absolute;
      .user-name 
        margin-top: 310px;
        width: 260px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        h1
          color: black;
          font-size: 20px;
      #fav-pokemon 
        margin-top: 50px;
        width: 280px;
        height: 50px;
        display: flex;
        align-items: center ;
        justify-content: space-between;
        background-color: #5A9BC4;
        border-radius: 4px;
        box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
        border: none;
        #start
          margin-left: 10px;
          width: auto;
          height: 25px;
        h1 
          margin-right: 50px;
          font-size: 18px; 
      #fav-pokemon:hover 
        background-color: #407697;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    .fav-pokemons 
      margin-right: 30px;
      margin-left: 460px;
      width: 60vw;
      height: auto;
      ul 
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      
</style>