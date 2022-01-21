<template>
  <div v-if="isFetched" class="back-card-line">

    <div @click="fav(pokemon.id)" class="fav-container">
      <img v-if="isFavPokemon(pokemon.id) || justfavd" src="../../assets/images/StarY.svg">
      <img v-else src="../../assets/images/StarG.svg">
    </div>

    <div :class="['card-fill', pokemon.types[0].type.name]">
      <div class="name-n-power">
        <h1>{{ pokemonNameUpperCase(pokemon.name) }}</h1>
        <div class="powers">
          <img
            draggable="false"
            v-for="element in pokemon.types"
            :key="element.slot"
            id="type-icon"
            :src="require(`../../assets/type-icons/${element.type.name}.svg`)"
          />
          <h2>{{ pokemon.stats.hp + " HP" }}</h2>
        </div>
      </div>

      <div class="pokemon-display-back-line">
        <div class="pokemon-display">
          <img draggable="false" :src="pokemon.img" :alt="pokemon.nome" />
        </div>
      </div>

      <div class="pokemon-stats">
        <div class="stat">
          <h1>Attack</h1>
          <p>{{ pokemon.stats.attack }}</p>
        </div>
        <div class="stat">
          <h1>Defense</h1>
          <p>{{ pokemon.stats.defense }}</p>
        </div>
        <div class="stat">
          <h1>Special-Attack</h1>
          <p>{{ pokemon.stats.special_attack }}</p>
        </div>
        <div class="stat">
          <h1>Special-Defense</h1>
          <p>{{ pokemon.stats.special_defense }}</p>
        </div>
        <div class="stat">
          <h1>Speed</h1>
          <p>{{ pokemon.stats.speed }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="c-loader"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import http from '@/http'

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    pokemon_index: {
      type: Number,
      required: true,
    },
  },
  created() {
    this.fetchPokemonData({
      index: this.$props.pokemon_index,
      url: this.$props.url,
    })
      .then((res) => {
        this.pokemon.name = res.data.name;
        this.pokemon.id = res.data.id;

        this.pokemon.type = res.data.types[0].type.name;
        this.pokemon.types = res.data.types;

        this.pokemon.img = res.data.sprites.front_default;
        this.pokemon.stats.hp = res.data.stats[0].base_stat;
        this.pokemon.stats.attack = res.data.stats[1].base_stat;
        this.pokemon.stats.defense = res.data.stats[2].base_stat;
        this.pokemon.stats.special_attack = res.data.stats[3].base_stat;
        this.pokemon.stats.special_defense = res.data.stats[4].base_stat;
        this.pokemon.stats.speed = res.data.stats[5].base_stat;

        this.isFetched = true;
      })
      .catch((err) => console.log(err));
  },
  data() {
    return {
      isFetched: false,
      justfavd: false,

      pokemon: {
        img: "",
        name: "",
        id: -1,
        types: [],
        type: "",
        stats: {
          hp: "",
          attack: "",
          defense: "",
          special_attack: "",
          special_defense: "",
          speed: "",
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      "getPokemonTypes",
      'getFavPokemons'
      ])
  },
  methods: {
    ...mapActions(["fetchPokemonData"]),
    ...mapMutations([
        'REMOVE_FAV_POKEMON',
        'ADD_FAV_POKEMON'
        ]),

    pokemonNameUpperCase(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    async fav(id) {
      if(!this.isFavPokemon(id)){
        await http.put('/favpokemon/add',{id: id},{headers: {"Authorization" : `Bearer ${this.$store.state.token}`}})
        this.ADD_FAV_POKEMON(id)
        this.justfavd = true
      }else {
        await http.put('/favpokemon/remove',{id: id},{headers: {"Authorization" : `Bearer ${this.$store.state.token}`}})
        this.REMOVE_FAV_POKEMON(id)
        this.justfavd = false
      }
    },
    isFavPokemon(id){
      return this.getFavPokemons.includes(id)
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

* {
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}

.back-card-line {
  position: relative;

  margin: 25px;
  width: 220px;
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffff00;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  border-radius: 4px;
  border: 1.5px solid #000000;
}

.fav-container {
  position: absolute;
  top: -31px;
  left: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 28px;

  border-radius: 5px 5px 0px 0px;
  border: .5px solid #000000;
  box-shadow: 2px -2px 40px rgba(0, 0, 0, 0.15);
  background-color: #FFF;

  cursor: pointer;
}

.fav-container img {
  margin-bottom: 2px;

  width: auto;
  height: 20px;
}

.card-fill {
  width: 209px;
  height: 266px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1.5px solid #000000;
}

.name-n-power {
  width: 200px;
  margin-bottom: 3px;

  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: space-between;
}

.name-n-power h1 {
  margin-left: 10px;
}

.name-n-power .powers h2 {
  margin: -3px;
  font-size: 12px;
}

.name-n-power .powers {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
}

.name-n-power #type-icon {
  margin-left: 7px;
  margin-right: 9px;
  width: 20px;
  height: 25px;
}

.pokemon-display-back-line {
  width: 179px;
  height: 115px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffff00;
  border-radius: 2px;
  border: 1.5px solid #000000;
}

.pokemon-display {
  width: 170px;
  height: 108px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-radius: 2px;
  border: 1.5px solid #000000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.pokemon-stats {
  padding: 10px 0px 10px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.stat {
  width: 179px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2px 0px 2px 0px;

  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.stat h1 {
  margin-left: 3px;
  font-size: 11px;
}

.stat p {
  margin-right: 3px;
  font-size: 11px;
}

.normal {
  /* background-color: #A8A77A; */
  background: rgb(168, 167, 122);
  background: linear-gradient(
    0deg,
    rgba(168, 167, 122, 1) 0%,
    rgba(252, 239, 239, 1) 100%
  );
}

.grass {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #7ac74c;
}

.fire {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #ee8130;
}

.water {
  background: linear-gradient(
      180deg,
      rgba(251, 249, 249, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #6390f0;
}

.bug {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #a6b91a;
}

.poison {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #a33ea1;
}

.electric {
  background: linear-gradient(
      180deg,
      rgba(251, 249, 249, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #f7d02c;
}

.ground {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #e2bf65;
}

.fairy {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #d685ad;
}

.fighting {
  background: linear-gradient(
      180deg,
      rgba(251, 249, 249, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #bbaacc;
}

.psychic {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #f95587;
}

.rock {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #b6a136;
}

.ghost {
  background: linear-gradient(
      180deg,
      rgba(251, 249, 249, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #735797;
}

.ice {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #96d9d6;
}

.flying {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #a98ff3;
}

.steel {
  background: linear-gradient(
      180deg,
      rgba(251, 249, 249, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #b7b7ce;
}

.dark {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #705746;
}

.dragon {
  background: linear-gradient(
      180deg,
      rgba(252, 239, 239, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #6f35fc;
}

.c-loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  width: 120px;
  height: 120px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
</style>
