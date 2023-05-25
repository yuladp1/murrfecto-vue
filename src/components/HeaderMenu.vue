<template>
  <nav class="nav__container">
    <div class="nav__brand">
      <figure @click="router.push({ path: `/` })">
        <img class="navbar-item" src="../assets/icons/logo-murrfecto.svg" />
      </figure>
    </div>
    <div class="wrapper-menu-button">
      <div class="nav__buttons">
        <p @click="router.push({ path: `/about` })">Про притулок</p>
        <p @click="router.push({ path: `/our-cats` })">Наші хвости</p>
        <p @click="router.push({ path: `/contacts` })">Контакти</p>
      </div>
      <button class="nav__button" @click="router.push({ path: `/feed-the-cat` })">
        Задонатити
      </button>
   
    </div>
    <div class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
       </nav>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/counter'
export default {
  setup() {
    const base = useCounterStore()
    const router = useRouter()
    onMounted(() => {})

    return { base: ref(base), router }
  }
}
</script>

<style lang="scss" scoped>
.nav__container {
  width: 89%;
  // margin: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
  margin: auto;
}
.nav__brand:hover {
  cursor: pointer;
}
.wrapper-menu-button {
  display: flex;
  align-items: center;
  gap: 48px;
}
.nav__buttons {
  display: flex;
  gap: 24px;
  font-weight: 700;
}
.nav__button:hover {
  cursor: url('../assets/icons/paw.svg'), pointer;
  border-bottom: 2px solid #4b3542;
}
.burger {
  display: none;
}

@media screen and (max-width: 900px) {
  .nav__container {
    width: 96%;
  }
  .wrapper-menu-button {
    gap: 20px;
  }
  .nav__buttons {
    gap: 14px;
  }
}
@media screen and (max-width: 768px) {
  .nav__container {
    margin: 42px auto;
  }
  .nav__brand {
    width: 19%;
    height: auto;
  }
  .nav__buttons {
    display: none;
  }
  .nav__button {
    width: 270px;
  }
  .burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 16px;
  span {
    width: 100%;
    border: 1px solid #4B3542;
  }
}
}
</style>
