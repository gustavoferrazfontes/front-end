<template>
  <section class="d-flex wrapped f-100 w-100 main">
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
.main {
  height: 100vh;

  .main-content {
    margin: 0 50px 0 127px;
  }
}
</style>
