<template>
  <div id="clima-component" :class="typeof clima.main != 'undefined' && clima.main.temperatura > 20 ?
      'quente' : '' ">
    <main>
      <div class="container-pesquisa">
        <input
          type="text"
          class="barra-pesquisa"
          placeholder="Buscar cidade..."
          v-model="busca"
          @keypress="fetchClima"
        />
      </div>
      <div class="clima-wrap" v-if="typeof clima.main != 'undefined' ">
          <div class="box-localizacao">
              <div class="localizacao"> {{ clima.name }}, {{ clima.sys.country }} </div>
              <div class="data"> {{ dataBuilder() }} </div>
          </div>
          <div class="clima-box">
              <div class="temperatura"> {{ Math.round(clima.main.temp) }}ºC</div>
              <div class="clima"> {{ clima.weather[0].main }} </div>
              <div class="clima"> {{ clima.weather[0].description }} </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "Clima",
  data() {
    return {
      api_key: "d35e9702b47cb4bf09864e6f0baa4da5",
      url_base: 'https://api.openweathermap.org/data/2.5/',
      busca: '',
      clima: {}
    };
  },
  
  methods: {
      fetchClima (e) {
          if (e.key == "Enter") {
              fetch(`${this.url_base}weather?q=${this.busca}&lang=pt_br&units=metric&APPID=${this.api_key}`)
              .then(res => {
                  return res.json();
              }).then(this.resultadoFinal);
          }
      },
      resultadoFinal (resultado) {
          this.clima = resultado;
      },
      dataBuilder () {
          let d = new Date();
          let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
          let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

          let dia = dias[d.getDay()];
          let data = d.getDate();
          let mes = meses[d.getMonth()];
          let ano = d.getFullYear();

          return `${dia}, ${data} ${mes} de ${ano}`;

      }
  }
};
</script>

<style scoped>
.nav-bar {
  display: none !important;
}

#clima-component {
  margin: 0;
  padding: 0;
  background-image: url("../../assets/images/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#clima-component .quente {
  background-image: url("../../assets/images/warm-bg.jpg");
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.container-pesquisa {
  width: 100%;
  margin-bottom: 30px;
  margin-top: 10%;
  width: 75%;
}

.container-pesquisa .barra-pesquisa {
  display: flex;
  width: 50%;
  padding: 15px;
  margin-left: 40%;
  justify-content: center;
  align-self: center;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  transition: 0.4s;
}

.container-pesquisa .barra-pesquisa:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 25px;
}

.box-localizacao .localizacao {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.box-localizacao .data {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    font-style: italic;
}

.clima-box {
    text-align: center;
}

.clima-box .temperatura {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;

    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.clima-box .clima {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
}
</style>