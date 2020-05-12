<template>
  <section class="d-flex f-100 wrapped jc-start">
    <h1 class="d-flex f-100">Pessoas que vão ganhar dinheiro</h1>
    <article class="d-flex f-100 wrapped">
      <MoneyCard />
      <MoneyCard />
    </article>
  </section>
</template>
<script>
import MoneyCard from "@/components/MoneyCard.vue";
export default {
  components: {
    MoneyCard
  }
};
</script>