<template>
  <transition name="modal-fade">
    <section class="lanup-modal" @keyup.esc="close" tabindex="0">
      <article class="modal-content d-flex f-100 wrapped medium">
        <header class="d-flex f-100 w-100 ai-center jc-space-between">
          <h2>Quantos reais adicionar para [Nome da pessoa]?</h2>
        </header>
        <article class="d-flex f-100 wrapped content"></article>
        <footer class="d-flex f-100 wrapped"></footer>
      </article>
    </section>
  </transition>
</template>
<script>
export default {
  data: () => ({
    show: false
  }),
  created() {
    this.register();
  },
  methods: {
    register() {
      const MODAL_OPEN_EVENT = `modal:open:${this.name}`;
      const MODAL_CLOSE_EVENT = `modal:close:${this.name}`;

      this.$eventhub.$on(MODAL_OPEN_EVENT, this.open);
      this.$eventhub.$on(MODAL_CLOSE_EVENT, this.close);
    },
    open($event) {
      this.$emit("open", $event);
      this.show = true;
    },
    close($event) {
      this.$emit("close", $event);
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors.scss";

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
section {
  z-index: 9;
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  background: black 0% 0% no-repeat padding-box;
  background-color: rgba(black, 0.5);
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  grid-column: 0 3;
  grid-row: 0 3;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.5);

  header {
    background-color: $GreenRaze;
    padding: 0 1rem;
    height: 50px;
    width: 100%;

    h2 {
      color: white;
      font-size: 18px;
      line-height: 25px;
      font-weight: normal;
    }

    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
    }

    .close-button {
      border-radius: 50px;
      color: white;
      font-size: 1.2rem;
      height: 30px;
      width: 30px;
      background: rgba(white, 0.1);

      &:hover {
        background: rgba(white, 0.13);
      }

      &:active {
        background: rgba(white, 0.16);
      }
    }
  }
  .content {
    height: 20vh;
  }

  footer {
    background: $Mercury;
  }

  .modal-content {
    background-color: #fff;
    width: auto;

    &.medium {
      min-width: 45%;
      max-width: 45%;
      height: 60%;
    }
  }
  .border-solid {
    border: 2px solid white;
  }
}
</style>
