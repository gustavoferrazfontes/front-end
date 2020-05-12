<template>
  <section class="d-flex ai-center jc-center logotipo">
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
@import "@/styles/breakpoints";

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

  @media (max-width: $laptop) {
    justify-content: center;
    margin: 0;
    height: 42px;
    margin: 10px 0;
    padding: 10px;
    width: 100px;

    span {
      font-size: 14px;
    }
  }
}
</style>