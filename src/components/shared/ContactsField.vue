<template>
  <div class="contacts-base">
    <div class="contacts-wrapper">  
      <h1>Contatos</h1>
      <h3>Online</h3>

      <div class="contacts-field">
        <Contact :url="'Alexandre.png'" :name="'Alexandre'" :online_sts="'online'"/>
        <Contact :url="'Alicia.png'" :name="'Alicia'" :online_sts="'offline'"/>
        <Contact :url="'Brandom.png'" :name="'Brandom'" :online_sts="'online'"/>
        <Contact :url="'Brenda.png'" :name="'Brenda'" :online_sts="'online'"/>
        <Contact :url="'Bruna.png'" :name="'Bruna'" :online_sts="'offline'"/>
        <Contact :url="'Carlos.png'" :name="'Carlos'" :online_sts="'online'"/>
        <Contact :url="'Emma.png'" :name="'Emma'" :online_sts="'online'"/>
        <Contact :url="'Kim.png'" :name="'Kim'" :online_sts="'offline'"/>
      </div>  
    </div>
  </div>
</template>

<script>
  import Contact from "./Contact.vue"

  export default{
    components: {
      Contact
    }
  }
</script>

<style scoped>
  .contacts-base{
    float: right;
    width: 350px; 
    height: 100vh;
  }

  .contacts-wrapper{
    position: fixed;

    margin-top: 70px;
    
    width: 350px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .contacts-wrapper h1{
    margin-top: 40px;
    font-size: 16px;

    color: black;
  }

   .contacts-wrapper h3{
    margin-top: 10px;

    font-size: 13px;
    font-weight: 400;

    color: black;
  }

  .contacts-field{
    margin-top: 20px;
  }

  .contacts-field > * {
    margin-top: 5px;
  }
</style>
