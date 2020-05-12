<template>
  <section class="d-flex wrapped f-100 main">
    <Menu />
    <article class="d-flex f-70 wrapped jc-center main-content">
      <router-view />
    </article>

    <Modal name="modal" />
  </section>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "Home",
  components: {
    Menu
  }
};
</script>
<style lang="scss">
@import "@/styles/breakpoints";

.main {
  height: 100vh;

  .main-content {
    margin: 0 50px 0 127px;
  }

  @media (max-width: $laptop) {
    flex: 0 1 100%;
    width: auto;
    flex-wrap: wrap;

    .main-content {
      flex: 0 1 100%;
      margin: 0px;
    }
  }
}
</style>
