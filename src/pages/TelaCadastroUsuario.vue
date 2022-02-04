<template>
  <div class="container">
    <alert ref="alert"/>
    <div class="widget">
      <h1>Faça seu cadastro <br> e <br> Embarque nessa aventura</h1>

      <form @submit.prevent="cadastrar" class="formulario">
        <label for="">Nome</label>
        <input v-model="usuario.nome" type="text">
        <label for="">E-mail</label>
        <input v-model="usuario.email" type="email">
        <label for="">Senha</label>
        <input v-model="usuario.senha" type="password">

        <button type="submit" >Cadastrar</button>
      </form>

      <span> <span>Já tem uma conta?</span> <br> Faça seu Login: <router-link to="/login"><a>Login</a></router-link></span>

      <img id="PokeBall" src="@/assets/images/PokeBall.svg" alt="PokeBall">
      <img id="MegaBall" src="@/assets/images/MegaBall.svg" alt="MegaBall">
      <img id="UltraBall" src="@/assets/images/UltraBall.svg" alt="UltraBall">
    </div>
  </div>
</template>

<script>
import http from '@/http'
import Alert from '../components/Alert.vue'

export default{
  components: {
		Alert
	},
  data(){
    return{
      usuario:{
        nome:'',
        email:'',
        senha:''
      }
    }
  },
  methods: {
    cadastrar(){
      http.post("auth/register",this.usuario)
        .then(res => {
          this.$refs.alert.toggle({	
						title: "Cadastro realizado com Sucesso",
						description: "Va para a página de Login para acessar seu perfil",
						state:"succes"})
        })
        .catch(err => {
          this.$refs.alert.toggle({	
						title: "Erro ao realizar Cadastro",
						description: "Por favor tente novamente mais tarde",
						state:"failure"})
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  * 
    font-family: 'Poppins', sans-serif;
    color: black;
    .container 
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: center;
    .widget 
      position: relative;
      margin-top: 25px;
      width: 538.49px;
      height: 604px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background: #FFFFFF;
      box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      h1
        margin-top: 50px;
        width: 360px;
        height: auto;
        font-size: 26px;
        line-height: 39px;
        text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
      .formulario 
        margin-top: 50px
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        label
          margin-left: 12px;
          align-self: flex-start;
          font-size: 18px;
          line-height: 27px;
        input
          padding: 10px;
          width: 248px;
          height: 40px;
          border: 0.5px solid #000000;
          box-sizing: border-box;
          border-radius: 30px;
          font-weight: 400;
        button
          margin-top: 25px;
          width: 110.67px;
          height: 40px;
          background: #FF0000;
          transition: 0.2s;
          border-radius: 30px;
          border: none;
          color: white;
          cursor pointer;
        button:hover
          background: #e40808;
      > span
        margin-top: 25px;
        font-weight: 500;
        text-align: center;
      > span > span 
          font-weight: 400;
      > span a 
          text-decoration: none;
    #PokeBall
      position: absolute;
      top: -20px;
      right: -20px;
      transform: rotate(5deg);
    #MegaBall
      position: absolute;
      bottom: 30px;
      left: -30px;
      transform: rotate(-30deg);
    #UltraBall 
      position: absolute;
      bottom: -20px;
      right: -20px;
      transform: rotate(20deg);
</style>
