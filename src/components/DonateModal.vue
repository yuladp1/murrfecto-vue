<template>
  <Teleport to="body">
    <section class="donate-modal" v-show="base.showModalDonate" ref="target">
      <figure><img src="../assets/modals/kitten.png" alt="" /></figure>
      <div class="donates-wrapper">
        <p>Зібрані кошти підуть на харчування та медичну допомогу</p>
        <div class="tabs">
          <button :class="{ active: isActiveTab === 1 }" @click="addActiveTab(1)">
            Одноразово
          </button>
          <button :class="{ active: isActiveTab === 2 }" @click="addActiveTab(2)">Щомісячно</button>
        </div>
        <div class="tabcontent">
          <button class="sum20" @click="sum = 20">20</button>
          <button class="sum50" @click="sum = 50">50</button>
          <button class="sum100" @click="sum = 100">100</button>
          <button class="sum200" @click="sum = 200">200</button>
          <input class="other" v-model="sum" :placeholder="sum" />
        </div>
        <p>Допомогти конкретному котику</p>
        <select v-model="selectedCat">
          <option selected>Оберіть пухнастика</option>
          <option v-for="cat in base.catsArray" :key="cat.ID" :value="catSelect">
            {{ cat.CatsName }}
          </option>
        </select>
        <button class="nav__button" @click="createOrder(sum, catSelect)">Допомогти</button>
      </div>
    </section>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { onClickOutside } from '@vueuse/core'
const base = useCounterStore()
const sum = ref('')
const isActiveTab = ref('1')
const target = ref(null)
onClickOutside(target, () => {
  base.showModalDonate = false
})
const addActiveTab = (param) => {
  isActiveTab.value = param
}
const createOrder = (amount, order_desc) => {
  var button = window.$ipsp.get('button')
  button.setMerchantId(1396424)
  button.setAmount(amount, 'UAH')
  button.setResponseUrl('http://example.com/result/')
  button.setHost('pay.fondy.eu')
  button.addField({
    label: 'Допомога для',
    name: 'order_desc',
    value: order_desc
  })
  window.location.href = button.getUrl()
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
@media screen and (max-width: 1001px) {
  section {
  width: 75%;
}
}
@media screen and (max-width: 788px) {
  section {
  width: 100%;
  top: 0;
}
p {
  margin: 20px -30px 20px -30px;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}
}
@media screen and (max-width: 390px) {
  section {
    position: absolute;
    flex-direction: column-reverse;
    top: 0;
    width: 100%;
    height: auto;
      }
  figure {
        height: 50%;
      }
  img {
    height: 100%;
    width: auto;
      }
  .donates-wrapper {
     width: 100%;
     height: 50%;
     padding: 0 10px;
}
p {
  margin: 0;
}
}
</style>
