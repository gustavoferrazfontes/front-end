<template>
  <section class="d-flex f-100 ai-center jc-center logotipo">
    <span>logotipo</span>
  </section>
</template>
<script>
export default {
  name: "Logotipo"
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors.scss";
.logotipo {
  border-radius: 40px;
  background: $ParisWhite;
  opacity: 0.6;
  margin: 23px 23px 0 0;
  height: 100px;

  span {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 900;
    color: $GreenRaze;
  }
}
</style>