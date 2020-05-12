<template>
  <section class="d-flex f-45 jc-center ai-center cursor-pointer cash" @click.prevent="add">
    <span>R$ {{bill}}</span>
  </section>
</template>
<script>
export default {
  name: "Cash",
  props: {
    bill: {
      Type: Number,
      required: true
    }
  },
  methods: {
    add() {}
  }
};
</script>
<style lang="scss" >
@import "@/styles/_colors";

.cash {
  background: $ParisWhite;
  color: $GreenRaze;
  font-size: 28.36px;
  font-weight: 900;
  margin-bottom: 20px;
  height: 96px;
}
</style>