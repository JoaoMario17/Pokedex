<template>
  <div class="catalog-wrapper"> 
    <div class="catalog-profile-info">
      <div id="proile-pic-wrapper">
        <img id="proile-pic" src="../../assets/images_for_tests/Alberto.png" alt="foto">
      </div>
      <h1>{{this.$props.username}}</h1>
      <button>Ver Perfil</button>
    </div>
    <div class="catalog-options">
      <Option :img="'messeger.svg'" :name="'Messeger'"/>
      <Option :img="'seguidores.svg'" :name="'Seguidores'"/>
      <Option :img="'grupos.svg'" :name="'Grupos'"/>
      <Option :img="'paginas.svg'" :name="'Páginas'"/>
      <Option :img="'eventos.svg'" :name="'Eventos'"/>
      <Option :img="'fundacoes.svg'" :name="'Fundações'"/>
      <Option :img="'memorias.svg'" :name="'Memórias'"/>
      <Option :img="'videos.svg'" :name="'Vídeos'"/>
    </div> 
  </div>
</template>

<script>
import Option from './shared/Option.vue'

export default{
  props: {
    username: ''
  },
  components:{
    Option
  }
}

</script>

<style scoped>

 .catalog-wrapper{
   position: fixed;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   width: 400px; 
   height: 100%;

   background: var(--verde-escuro);
  }

  .catalog-profile-info{
    margin-top: 100px;

    width: 380px;

    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 60% 40%;
    grid-template-areas: 
      "a b"
      "a c"
    ;
  }

  #proile-pic-wrapper{
    grid-area: a;

    align-self: center;
    justify-self: center;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 100px;

    border-radius: 50px;
  }

  #proile-pic{
    border-radius: 50%;
    margin-right: 10px;
    width: 135px;
    height: auto;
  }

  .catalog-profile-info h1{
    grid-area: b;

    height: auto;

    align-self: center;

    font-size: 25px;
  }

  .catalog-profile-info button {
    grid-area: c;

    align-self: center;
    justify-self: flex-start;
    
    background-color: var(--verde);

    width: 160px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 7px 2px;

    cursor: pointer;
  }

  .catalog-profile-info button:hover{
    background-color: var(--verde-hover);
  }

  .catalog-options{
    margin-top: 30px;

    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    display: flex;
  }
</style>