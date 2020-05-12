<template>
  <section class="d-flex f-100 wrapped money-card">
    <article class="d-flex f-10 jc-center">
      <CurrencyIcon class="icon" />
    </article>
    <article class="d-flex f-90 wrapped content">
      <AmountFeedback :value="amount" />
      <div class="d-flex f-100 wrapped">
        <span class="name">Nome da pessoa vai aqui</span>
        <p>Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</p>
        <MoneyProgressBar value="amount" />
        <AddMoneyButton />
      </div>
    </article>
  </section>
</template>
<script>
import MoneyProgressBar from "@/components/MoneyProgressBar";
import AddMoneyButton from "@/components/AddMoneyButton";
import CurrencyIcon from "@/components/CurrencyIcon";
import AmountFeedback from "@/components/AmountFeedback";
export default {
  name: "MoneyCard",
  components: {
    MoneyProgressBar,
    AddMoneyButton,
    CurrencyIcon,
    AmountFeedback
  },
  data: () => ({
    amount: 0
  })
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors";

.money-card {
  height: 196px;
  margin-right: 20px;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  .icon {
    align-items: center;
  }

  .name {
    color: $GreenRaze;
    font-weight: bold;
    font-size: 16px;
    line-height: 140.62%;
  }

  .content {
    position: relative;
  }
}
.dev {
  border: 1px solid black;
}
</style>