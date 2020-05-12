<template>
  <section class="d-flex f-100 wrapped jc-start">
    <h1 class="d-flex f-100">Pessoas que vão ganhar dinheiro</h1>
    <article class="d-flex f-100 wrapped">
      <MoneyCard
        v-for="(employee,index) in employees"
        :key="index"
        :employee="employee"
        :index="index"
      />
    </article>
  </section>
</template>
<script>
import MoneyCard from "@/components/MoneyCard.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MoneyCard
  },
  computed: {
    ...mapGetters(["employees"])
  },
  methods: {
    ...mapActions({ getEmployees: "getEmployees" })
  },
  created() {
    this.getEmployees();
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/breakpoints";

section {
  @media (max-width: $laptop) {
    margin: 60px 0 0 0;

    h1 {
      font-size: 28px;
      margin-left: 20px;
    }
  }
}
</style>