<template>
  <div class="option-box">
    <img :src="require(`@/assets/icons/${img}`)" :alt="this.$props.name">
    <h1>{{this.$props.name}}</h1>
  </div>
</template>

<script>
  export default{
    props: {
      img: '',
      name: ''
    }
  }
</script>

<style scoped>
  .option-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 10px;

    width: 100px;
    height: 85px;

    border-radius: 20px;

    background-color: var(--verde);

    cursor: pointer;
  }

  .option-box:hover{
    background-color: var(--verde-hover);
  }

  .option-box img {
    margin-top: -10px;

    width: 70px;
    height: auto;
  }

  .option-box h1 {
    margin-top: -6px;

    font-weight: 600;
  } 
</style>
