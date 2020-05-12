<template>
  <transition name="content-fade" v-if="show">
    <section class="modal" @keyup.esc="close" tabindex="0">
      <article class="modal-content d-flex f-100 wrapped medium">
        <header class="d-flex f-100 w-100 ai-center jc-space-between">
          <h2>Quantos reais adicionar para {{title}}?</h2>
          <CloseIcon class="cursor-pointer" @click="close" />
        </header>
        <article class="d-flex f-100 jc-center ai-center wrapped content">
          <div class="d-flex f-1 wrapped jc-space-between ml-40 mr-40">
            <Cash v-for="(bill,index) in bills" :key="index" :bill="bill" @click="onSelect" />
          </div>
        </article>
        <footer class="d-flex f-100 wrapped"></footer>
      </article>
    </section>
  </transition>
</template>
<script>
import Cash from "@/components/Cash";
export default {
  components: {
    Cash
  },
  data: () => ({
    show: false,
    name: "modal",
    bills: [25, 50, 75, 125],
    title: "",
    add: () => ({})
  }),
  created() {
    this.register();
  },

  methods: {
    register() {
      const MODAL_OPEN_EVENT = `modal:open:${this.name}`;
      this.$eventhub.$on(MODAL_OPEN_EVENT, this.open);
    },
    onSelect(bill) {
      this.add(bill);
      this.close();
    },

    open({ title, add }) {
      this.show = true;
      this.title = title;
      this.add = add;
    },
    close() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors.scss";
@import "@/styles/breakpoints";

.content-fade-leave-active,
.content-fade-enter-to,
.content-fade-active {
  transition: all 0.5s;
}
.content-fade-enter,
.content-fade-leave-to {
  transform: translate(0, 100vh);
}

.modal {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;

  header {
    background-color: $GreenRaze;
    padding: 0 1rem;
    height: 50px;
    justify-content: space-between;
    width: 100%;

    h2 {
      color: white;
      font-size: 18px;
      font-weight: normal;
      line-height: 25px;
    }

    .title {
      white-space: nowrap;
    }
  }
  .content {
    height: 20vh;
    align-content: center;
  }

  footer {
    background: $Mercury;
  }

  .modal-content {
    background-color: #fff;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.5);
    width: auto;

    &.medium {
      min-width: 45%;
      max-width: 45%;
      height: 70%;

      @media (max-width: $mobile) {
        max-width: 100%;
        min-width: 100%;
      }
    }
  }
  .border-solid {
    border: 2px solid white;
  }

  @media (max-width: $mobile) {
    align-items: flex-end;
  }
}
</style>
