<template>
  <div class="page-wrapper">
    <div class="form-wrapper">
      <form autocomplete="off" action="" class="form">

        <div id="item_1" class="box">
          <div id="profile-pic-wrapper"
          :style="{ 'background-image': `url(${previewImage})` }"
          @click="selectImage">
          </div>

          <input type="file"
          ref="fileInput"
          @input="pickFile">
          <label for="sendfile" type="file"></label>
        </div>

        <div id="item_2" class="box">
          <h3>Nome do usuário</h3>
          <h3>Alterar nome de usuário</h3>
        </div>

        <div id="item_3" class="box">
          <h3>Nome</h3>
          <h3>Nome de usuário</h3>
        </div>
        <div id="item_4" class="box">
          <input v-model="usuario.name" autocomplete="off" type="text" placeholder="Digite seu Nome">
          <input v-model="usuario.username" autocomplete="off"  type="text" placeholder="Digite seu Nome de Usuário">
        </div>

        <div id="item_5" class="box">
          <h3>Email</h3>
          <h3>Nova senha</h3>
          <h3>Repita a senha</h3>
        </div>
        <div id="item_6" class="box">
          <input v-model="usuario.email" type="email" placeholder="Digite seu e-mail">
          <input v-model="usuario.senha" type="password" autocomplete="off" placeholder="Digite sua Nova Senha">
          <input v-model="usuario.senhacmp" type="password" autocomplete="off" placeholder="Repita sua Nova Senha">
        </div>
        
        <div id="item_7" class="box">
          <button>Enviar</button>
          <a href="">Desconectar</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      previewImage: null,

      usuario: {
        name:'',
        username:'',
        email:'',
        senha: '',
        senhacmp:''
      }
      
    }
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = event => {
          this.previewImage = event.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  }
}
  
</script>

<style scoped>
  input {
    margin-bottom: 10px;

    width: 100%;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 8px 6px;

    color: black;
    font-weight: 400;
  }

  .page-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-wrapper{
    margin-top: 120px;

    width: 600px;
    height: 520px;  

    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    background-color: var(--verde-escuro);
  }

  .form{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 25% 30% 30% 15%;

    grid-template-areas: 
      "a b"
      "c d"
      "e f" 
      "g g"
    ;
  }

  .form > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  .form #item_1, #item_2{
    margin-top: 10px;

    grid-area: a;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

   #profile-pic-wrapper{
    width: 59%;
    height: 100%;
    border-radius: 50px;
    justify-content: center;
    display: flex;
    align-self: center;
    cursor: pointer;    
  }

  input[type='file'] {
    display: none !important;
  }

    .form #item_2 {
    grid-area: b;
  }  

  .form #item_2 > h3 {
    width: 100%;
   text-align: left;
  }

  .form #item_3{
    grid-area: c;   
  }

  .form #item_3 > h3, #item_5 > h3{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    text-align: right;
  }

  .form #item_4{
    grid-area: d;
  }

  .form #item_4, #item_6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .form #item_4 > input, #item_6> input{
    width: 90%;
    margin-top: 5px;
  }

  .form #item_5{
    grid-area: e;
  }

  .form #item_6{
    grid-area: f;
  }

  .form #item_7{
    grid-area: g;
  }

  .form #item_7 button {
    margin-bottom: 10px;

    background-color: var(--verde);

    width: 160px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 7px 2px;

    cursor: pointer;
  }

  .form #item_7 button:hover {
    background-color: var(--verde-hover);
  }
</style>
