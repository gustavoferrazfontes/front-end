<template>
  <section class="d-flex f-100 wrapped money-card">
    <article class="d-flex f-10 jc-center icon-container">
      <CurrencyIcon class="icon" />
    </article>
    <article class="d-flex f-90 wrapped content">
      <AmountFeedback :value="amount" />
      <div class="d-flex f-100 wrapped">
        <p>
          <span class="name">{{name}}</span>
        </p>
        <p>Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</p>
        <MoneyProgressBar :value="amount" />
        <AddMoneyButton
          @added="addMoney"
          :employeeName="name"
          :class="{ 'disabled-container': isMaxAmount }"
        />
      </div>
    </article>
  </section>
</template>
<script>
import MoneyProgressBar from "@/components/MoneyProgressBar";
import AddMoneyButton from "@/components/AddMoneyButton";
import CurrencyIcon from "@/components/CurrencyIcon";
import AmountFeedback from "@/components/AmountFeedback";
import { mapActions } from "vuex";
export default {
  name: "MoneyCard",
  components: {
    MoneyProgressBar,
    AddMoneyButton,
    CurrencyIcon,
    AmountFeedback
  },
  props: {
    employee: {
      Type: Object,
      default: () => {}
    },
    index: {
      Type: Number,
      required: true
    }
  },
  computed: {
    name() {
      return this.employee.employee_name;
    },
    amount() {
      return this.employee.amount;
    },
    isMaxAmount() {
      return this.amount >= 200;
    }
  },

  methods: {
    ...mapActions(["updateAmount"]),

    addMoney(cash) {
      this.updateAmount({
        amount: cash,
        index: this.index
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_colors";
@import "@/styles/breakpoints";

.money-card {
  height: 196px;
  margin: 50px 20px 0 0;
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

  p {
    font-size: 16px;
    font-style: normal;
  }

  @media (max-width: $mobile) {
    height: 275px;
    margin: 50px 20px 0 20px;

    .icon-container {
      flex: 0;
      .icon {
        display: none;
      }
    }

    .content {
      flex: 100;
    }
  }
}
.dev {
  border: 1px solid black;
}
</style>