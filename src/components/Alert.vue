<template>
  <transition name="fade">
    <div v-if="show" :class="['alert-box',state]">
      <span>{{this.title}}</span>
      <p>{{this.description}}</p>
    </div>
  </transition>
</template>

<script>

export default {
  data(){
    return{
      show: false,
      title: '',
      description:'',
      state: null
    }
  },
  methods: {
    toggle(messageconfig){
      this.title = messageconfig.title
      this.description = messageconfig.description
      this.state = messageconfig.state
      this.show = true;
      setTimeout(() => this.show = false, 3000)
    }
  }
}
</script>


<style scoped lang="stylus">
  .alert-box
    padding: 5px
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    position: absolute
    bottom: 20px
    left: 20px
    width: 320px
    height: auto
    border-radius: 5px
    border: 1px solid black
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    z-index: 1
    p
      margin: 2px 0px 10px 0px
      font-weight: 200
  .succes
    background-color: #dcedc8
    border: 1px solid #33691e
    p,span
      color: #33691e
  .failure
    background-color: #fa6d6a
    border: 1px solid #a60e0b
    p,span
      color: white

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  } 
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>