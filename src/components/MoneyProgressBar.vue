<template>
  <section class="d-flex f-100 wrapped money-progress-bar">
    <progress max="200" :value="value" class="labelStyle"></progress>
  </section>
</template>
<script>
export default {
  name: "MoneyProgressBar",
  props: {
    value: {
      Type: Number,
      default: () => 0
    }
  },
  computed: {
    labelStyle() {
      return this.value > 0 ? "not-empty" : "empty";
    }
  }
};
</script>
<style lang="scss" >
@import "@/styles/_colors";
.money-progress-bar {
  progress {
    appearance: none;
    position: relative;
    -moz-appearance: none;
    width: 100%;
    -webkit-appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    background-color: $Mercury;
    border-radius: 10px;
  }
  progress[value]::-webkit-progress-value {
    border-radius: 10px;
  }
  progress:before {
    content: "R$ " attr(value) ",00";
    font-size: 0.8em;
    left: 0;
    position: absolute;
    right: 0;
    margin-left: 10px;
    color: #fff;
  }
}
</style>