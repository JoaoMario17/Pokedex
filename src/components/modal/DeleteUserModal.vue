<template>
  <div class="modal" ref='modal' tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Tem Certeza de que deseja deletar seu Perfil.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button @click="deleteAction" type="button" class="btn btn-danger">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default{
  created() {
    console.log(this.user_uuid);
  },
  data() {
    return {
      modal: null,
      modalElement: null,
    };
  },
  mounted() {
    this.modalElement = document.querySelector('body').appendChild(this.$refs.modal);
    this.modal = new window.bootstrap.Modal(this.modalElement);
  },
  methods: {
    ...mapActions([
      'deleteUser'
    ]),
    close() {
      this.modal.hide();
    },
    open() {
      this.modal.show();
    },
    deleteAction() {
      this.deleteUser()
        .then(() => {
          this.close();
          this.$router.push({ name: 'Index'});
        });
    }
  }
}
</script>

<style scoped lang='stylus'>
.modal-body
  p
    color: black
</style>
