<template>
  <div class="contact-wrapper">
    <img :src="require(`@/assets/images_for_tests/${url}`)" alt="">
    <div :class="['online-ball', this.$props.online_sts]"></div>
    <h2>{{this.$props.name}}</h2>
  </div>
</template>

<script>
  export default{
    props: {
      url: '',
      name: '',
      online_sts: ''
    }
  }
</script>

<style scoped>
  .contact-wrapper{
    width: 300px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    border-radius: 35px;
  }

  .contact-wrapper:hover {
    background: rgba(128, 128, 128, 0.2);
  }

  .contact-wrapper img{
    margin-left: 3px;

    width: 44px;
    height: auto;

    border-radius: 50%;
  }

  .contact-wrapper h2{
    margin-left: 20px;

    color: black;
  }

  .online-ball{
    margin-bottom: -27px;
    margin-left: -10px;

    border-radius: 50%;
    border: solid 0.1px black;

    width: 10px;
    height: 10px;
  }

  .online{
    background-color: rgb(25, 179, 25);
  }

  .offline{
    background-color: rgb(228, 44, 44);
  }
</style>
