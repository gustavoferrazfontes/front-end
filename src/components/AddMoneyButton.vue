<template>
  <i class="cursor-pointer add-money-button" @click="openModal">
    <PlusIcon />
    <a>
      <span class="title">Clique aqui para adicionar reais</span>
    </a>
  </i>
</template>
<script>
import PlusIcon from "@/components/PlusIcon";
export default {
  name: "AddMoneyButton",

  components: {
    PlusIcon
  },
  methods: {
    openModal() {
      this.$eventhub.$emit("modal:open:modal");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors";

.add-money-button {
  .title {
    color: $GreenRaze;
    font-weight: normal;
    font-style: normal;
    vertical-align: top;
    margin-left: 9px;
  }
}
</style>
