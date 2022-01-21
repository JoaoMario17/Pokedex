<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "./components/shared/NavBar.vue"

export default {
  name: 'App',
  components: {
    NavBar
  } //teste 28/12/2021
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;

    --verde: #2BF14D;
    --verde-hover: #26cc42;
    --verde-escuro: #107266;
    --branco: #FFFFFF;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: var(--branco);
  }
</style>
