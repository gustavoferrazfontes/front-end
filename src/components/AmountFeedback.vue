<template>
  <section :class="backgroundColorStyle" class="amount-feedback d-flex f-1 jc-start ai-center">
    <CurrencyIcon color="#fff" :height="22" :width="22" class="icon" />
    <span class="title">{{message}}</span>
  </section>
</template>
<script>
export default {
  name: "AmountFeedback",
  props: {
    value: {
      Type: Number,
      default: () => 0
    }
  },
  computed: {
    backgroundColorStyle() {
      return this.value > 0 ? "added" : "empty";
    },
    message() {
      return this.value > 0
        ? `Você já adicionou R$ ${this.value},00`
        : "Você não adicionou nada";
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors";
@import "@/styles/breakpoints";

.amount-feedback {
  position: absolute;
  right: -35px;
  top: -35px;
  width: 267px;
  height: 38px;
  align-self: center;

  &.added {
    background: $GreenRaze;
  }

  &.empty {
    background: $Cinnabar;
  }

  .title {
    margin-left: 12px;
    color: #fff;
    font-size: 16px;
  }
  .icon {
    margin-left: 14px;
  }

  @media (max-width: $mobile) {
    right: -33px;
  }
}
</style>