<template>
  <section class="d-flex f-100 wrapped money-progress-bar">
    <progress max="200" value="50" data-label="R$ 50,00"></progress>
  </section>
</template>
<script>
export default {
  name: "MoneyProgressBar"
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
    content: attr(data-label);
    font-size: 0.8em;
    left: 0;
    position: absolute;
    right: 0;
  }
}
</style>