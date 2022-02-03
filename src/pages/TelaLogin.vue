<template>
  <div class="container">
    <div class="widget">
      <img id="login" src="@/assets/images/Login.svg" alt="Login" />

      <form @submit.prevent="login" class="formulario">
        <label>E-mail</label>
        <input v-model="usuario.email" type="email" />
        <label>Senha</label>
        <input v-model="usuario.senha" type="password" />

        <button type="submit">Login</button>
      </form>

      <span>
        <span>Não tem uma conta?</span> <br />
        Faça seu cadatro:
        <router-link to="/cadastro"><a>Cadstrar</a></router-link></span
      >

      <img id="PokeBall" src="@/assets/images/PokeBall.svg" alt="PokeBall" />
      <img id="MegaBall" src="@/assets/images/MegaBall.svg" alt="MegaBall" />
      <img id="UltraBall" src="@/assets/images/UltraBall.svg" alt="UltraBall" />
    </div>
  </div>
</template>

<script>
/* import http from '@/http' */
import { mapActions } from "vuex";

export default {
  name: "TelaLogin",
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    ...mapActions(["sendLoginData"]),
    login() {
      this.sendLoginData(this.usuario)
        .then((res) => {
          this.$router.push({ name: "Profile" });
        })
        .catch((err) => {});
    },
  },
};
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
				#login 
					margin-top: 50px;
					width: 300px;
					height: auto;
			span 
				margin-top: 10px;
				font-weight: 500;
				text-align: center;
			span 
				a 
					text-decoration: none;
			> span 
				> span 
					font-weight: 400;
			.formulario 
				margin-top: 50px;
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
					cursor: pointer;
				button:hover 
					background: #e40808;
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