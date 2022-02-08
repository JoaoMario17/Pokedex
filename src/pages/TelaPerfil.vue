<template>
  <div class="container">
    <div class="side-bar">

      <img id="profile-holder" src="@/assets/images/Profile_space.svg" alt="profile_space">

      <div class="user-img">
        <img id="frame" src="@/assets/images/moldura_pokedex.png" alt="">
      </div>

      <div class="user-name">
        <h1>{{this.getUser.nome}}</h1>
      </div>

      <div @click="logout" class="logout">
        <img id="logouticon" src="@/assets/images/LogoutIcon.svg" alt="LogOut">
        <h1>LogOut</h1>
      </div>
      
    </div>

    <div v-if="isSeted" class="fav-pokemons">
      <div class="title" > 
        <span>Fav Pokemons</span>  
        <img src="@/assets/images/StarY.svg" alt="">
      </div>

      <ul>
        <li v-for="(pokemon, index) in QuickSortedPokemons" :key="index">
          <pokemon-card :url="pokemon.url"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import QuickSort from '@/algorithms/QuickSort.js'
import { mapActions,mapGetters,mapMutations } from 'vuex'
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
      this.SetFavoritePokemonsUrls({pokearray: this.getFavPokemonsIds})
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
      'SetFavoritePokemonsUrls'
    ]),
    ...mapMutations([
      'CLEAN_TOEKEN'
    ]),
    logout() {
      this.CLEAN_TOEKEN()
      this.$router.push({name: "Index"})
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getFavPokemonsIds',
      'getPokemons',
      'getFavPokemons'
    ]),
    QuickSortedPokemons(){
      var array = [];
      //Convertendo a Proxy para um array de Proxys
      this.getFavPokemons.forEach(pokemon => {
        array.push(pokemon)
      })
      return QuickSort(array,0,array.length-1)
    }
  }
}

</script>

<style scoped lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
      border: solid 5px black;
      #profile-holder
        position: fixed;
        top: 110px;
        width: auto;
        height: 500px;
        z-index: -1;  
      .user-img 
        position: relative;
        top: 200px;
        width: 230px;
        height: 155px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("@/assets/images/profile_holders/Picachu.png");
        #frame
          width: auto;
          height: 200px;      
      .user-name 
        position: relative;
        box-sizing: border-box;
        padding: 8px
        top: 250px;
        left: -16px
        width: 130px;
        height: 85px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        h1
          color: white;
          font-family: 'Press Start 2P', cursive;
          font-size: 13px; 
          line-height: 20px;
      .logout
          cursor: pointer;
          position: absolute;
          bottom: 80px;
          left: 25px
          width: 80px
          display: flex
          justify-content: space-between  
          #logouticon
            width: auto;
            height: 17px
          h1
            color: black
    .fav-pokemons 
      margin-right: 30px;
      margin-left: 460px;
      width: 60vw;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title
        color: white
        background-color: #5A9BC4;
        width: 250px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 20px;
        border: solid 2px  #155177;
        span
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          margin-left: 20px;
        img 
          margin-left: -10px;
      ul 
        margin-top: 30px;
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      
</style>