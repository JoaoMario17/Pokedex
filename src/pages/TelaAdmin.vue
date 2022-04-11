<template>
  <div class="container">
    <div class="widget">
      <button @click="refresh" id="refresh-btn">
        <img id="refres-icon" src="@/assets/images/refresh-icon.svg" alt="refresh">
      </button>

      <div class="users">
        <h1 class="text text-center fs-5">Quantidade de usuários cadastrados</h1>
        <h2>{{usersCount}}</h2>
      </div>
      <hr>
      <div class="pokemon">
        <h1 class="text text-center fs-5">Pokemon mais favoritado</h1>
        <pokemon-card id="pokecard" :url="mostFavedPokemonUrl"/>
      </div>
    </div>

    <div @click="logout" class="logout">
        <img id="logouticon" src="@/assets/images/LogoutIcon.svg" alt="LogOut">
        <h1 class="fs-6">LogOut</h1>
    </div>
  </div>
</template>

<script>
import { mapActions,mapMutations } from "vuex";
import PokemonCard from '../components/MostFavedCard.vue'

export default {
  components: {
    'pokemon-card': PokemonCard
  },
  data() {
    return{
      usersCount: 0,
      mostFavedPokemonUrl: 'null',
    }
  },
  created(){
    this.fetchCount();
    this.fetchMostFaved();
  },
  methods: {
    ...mapActions(["fetchUsersCount","fetchMostFavedPokemon"]),
    ...mapMutations([
      'CLEAN_TOEKEN'
    ]),
    fetchCount() {
      this.fetchUsersCount()
      .then(res => {
        this.usersCount = res.data.usersCount;
      });
    },
    fetchMostFaved() {
      this.fetchMostFavedPokemon()
      .then(res => {
        this.mostFavedPokemonUrl = `pokemon/${res.data.mostFavedId}/`;
      });
    },
    logout() {
      this.CLEAN_TOEKEN()
      this.$router.push({name: "Index"})
    },
    refresh() {
      this.usersCount = 0,
      this.mostFavedPokemonUrl = 'null',
      this.fetchCount();
      this.fetchMostFaved();
    }
  }
};
</script>


<style scoped lang='stylus'>
.container 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .widget 
    position: relative;
    margin-top: 80px;
    width: 700px;
    height: 550px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    background: #FFFFFF;
    box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    #refresh-btn
      position: absolute
      top: 10px
      left: 10px
      cursor: pointer
      background-color: white
      border: none
      #refres-icon
        width: auto
        height: 20px
    .users 
    .pokemon
      width: 50%
      height: 100%
      display: flex
      flex-direction: column
      align-items: center
      justify-content: flex-start
      .text
        max-width: 200px
        margin-top: 50px
        width: auto
        height: 20px
        color: black
      h2 
        margin-top: 120px
        height: auto
        width: auto
        align-self: center
        font-size: 150px
        width: auto
        height: 20px
        color: black
      #pokecard
        margin-top: 70px
    hr
      height: 90%
      width: 2px
      background-color: black
      align-self: center
  .logout
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 25px
    width: 80px
    display: flex
    justify-content: space-between  
    #logouticon
      width: auto;
      height: 17px
    h1
      color: black
</style>