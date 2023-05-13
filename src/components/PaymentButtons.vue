<template>
  <div>
  <a href="https://pay.fondy.eu/s/yFIRp"><button v-on:click="pay">Сплатити 50 грн.</button> </a>
  </div>
</template>

<script>
//import "https://pay.fondy.eu/static_common/v1/checkout/ipsp.js"
export default {
  name: "PaymentButtons",
  created() {
    window.onload = () => {
   // this.button = $ipsp.get('button');
    this.button.setMerchantId(1522348);
    this.button.setAmount('50', 'UAH');
    this.button.setHost('pay.fondy.eu');
    this.button.create();
  }
},
  data() {
    return { button: null };
  },
  props: {},
  methods: {
    pay() {
      this.button.submit();
    },
  },
};
</script>

<style lang="scss" scoped></style>