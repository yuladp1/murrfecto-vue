<template>
  <section class="donate-modal" v-show="base.showModalDonate">
    <figure><img src="../assets/modals/kitten.png" alt="" /></figure>
    <div class="donates-wrapper">
      <p>Зібрані кошти підуть на харчування та медичну допомогу</p>
      <div class="tab">
        <button class="tablinks" @click="openTab(event, 'once')">Одноразово</button>
        <button class="tablinks" @click="openTab(event, 'monthly')">Щомісячно</button>
      </div>

      <!-- Tab content -->
      <div id="once" class="tabcontent">
        <button class="sum20">20</button>
        <button class="sum50">50</button>
        <button class="sum100">100</button>
        <button class="sum200">200</button>
        <input class="other"/>
      </div>

      <div id="monthly" class="tabcontent">
        <h3>monthly</h3>
        <p>monthly</p>
      </div>
      <p>Допомогти конкретному котику</p>
      <select v-model="selectedCat">
        <option selected>Оберіть пухнастика</option>
  <option v-for="cat in base.catsArray" :key="cat.ID" :value="cat.value">
    {{ cat.CatsName }}
  </option>
</select>
<button class="nav__button">Допомогти</button>

    </div>
  </section>
</template>

<script>
import { useCounterStore } from '../stores/counter'
export default {
  name: 'DonateModal',
  created() {},
  data() {
    const base = useCounterStore()
    function openTab(evt, cityName) {
      // Declare all variables
      var i, tabcontent, tablinks

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName('tabcontent')
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName('tablinks')
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '')
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = 'block'
      evt.currentTarget.className += ' active'
    }
    return { openTab, base }
  },
  props: {},
  methods: {}
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
.donates-wrapper {
  width: 41%;
  height: 100%;
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
#once {
  display: grid;
  grid-template-areas:
    '20 50 100'
    '200  other other';
    grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 42px 42px;
  grid-column-gap: 10px;
				grid-row-gap: 10px;
}
.other {
  grid-area: other;
}
.nav__button {
  width: 100%;
  margin-top: 24px;
}
</style>
