<template>
  <Teleport to="body" />
  <section class="donate-modal" v-show="base.showModalDonate" ref="target">
    <figure><img src="../assets/modals/kitten.png" alt="" /></figure>
    <div class="donates-wrapper">
      <p>Зібрані кошти підуть на харчування та медичну допомогу</p>
      <div class="tabs">
        <button :class="{ active: isActiveTab === 1 }" @click="this.addActiveTab(1)">
          Одноразово
        </button>
        <button :class="{ active: isActiveTab === 2 }" @click="this.addActiveTab(2)">
          Щомісячно
        </button>
      </div>
      <div class="tabcontent">
        <button class="sum20" @click="this.sum = 20">20</button>
        <button class="sum50" @click="this.sum = 50">50</button>
        <button class="sum100" @click="this.sum = 100">100</button>
        <button class="sum200" @click="this.sum = 200">200</button>
        <input class="other" v-model="this.sum" :placeholder="this.sum" />
      </div>
      <p>Допомогти конкретному котику</p>
      <select v-model="selectedCat">
        <option selected>Оберіть пухнастика</option>
        <option v-for="cat in base.catsArray" :key="cat.ID" :value="cat.value">
          {{ cat.CatsName }}
        </option>
      </select>
      <button class="nav__button" onclick="this.createOrder(this.sum,cat.value)">Допомогти</button>
    </div>
  </section>
  <Teleport />
</template>

<script>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { onClickOutside } from '@vueuse/core'
export default {
  name: 'DonateModal',
  setup() {
    const base = useCounterStore()
    const sum = ref('')
    const isActiveTab = ref('1')
    const target = ref(null)
    onClickOutside(target, () => {
      base.showModalDonate = false
    })
    return {
      base,
      sum,
      isActiveTab,
      target
    }
  },
  methods: {
    addActiveTab(param) {
      this.isActiveTab = param
    },
    createOrder(amount, order_desc) {
      var button = window.$ipsp.get('.nav__button')
      button.setMerchantId(1396424)
      button.setAmount(amount, 'UAH')
      button.setResponseUrl('http://example.com/result/')
      button.setHost('pay.fondy.eu')
      button.addField({
        label: 'Допомога для {cat.value}',
        name: 'order_desc',
        value: order_desc
      })
      location.href = button.getUrl()
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  position: absolute;
  z-index: 5;
  top: 172px;
  right: 50%;
  transform: translateX(50%);
  width: 55%;
  height: 523px;
  display: flex;
  background: white;
}

figure {
  height: 100%;
  background: #4b3542;
  flex: 0 0 38%;
}
p {
  margin: 40px -40px 24px -40px;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  // color: #3D4756;
}
.donates-wrapper {
  width: 41%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.tabs {
  width: 100%;
  display: flex;
  border: 2px solid #4b3542;
  border-radius: 8px;
}
.tabs button {
  transition: 0.3s;
  width: 50%;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  background: white;
  color: #4b3542;
  padding: 9px 0;
}

.tabs button.active {
  background: #4b3542;
  color: white;
}
.tabcontent {
  margin: 16px 0;
  width: 100%;
  display: grid;
  grid-template-areas:
    '20 50 100'
    '200  other other';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 42px 42px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.tabcontent > * {
  border: 1px solid #4b3542;
  border-radius: 8px;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.88rem;
  color: #4b3542;
  background-color: white;
}

.other {
  grid-area: other;
}
.nav__button {
  width: 100%;
  margin-top: 24px;
}
</style>
