<template>
  <nav class="nav__container">
    <div class="nav__brand">
      <figure @click="router.push({ path: `/` })">
        <img class="navbar-item" src="../assets/icons/logo-murrfecto.svg" />
      </figure>
    </div>


    <div class="nav__buttons">
       <p  @click="router.push({ path: `/about` })">Про притулок</p>
        <p  @click="router.push({ path: `/our-cats` })">
          Наші хвости
        </p>
        <p @click="router.push({ path: `/contacts` })">
          Контакти
        </p>
        <button class="nav__button" @click="router.push({ path: `/feed-the-cat` })">Задонатити</button>
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
  margin: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
}
.nav__buttons {
  display: flex;
    justify-content: flex-end;
  align-items: center;
   flex: 1 1;
   font-weight: 700;
}
.nav__buttons>*:not(:last-child) {
  padding: 0 24px;
}
.nav__buttons>*:hover{
  cursor: url('../assets/icons/paw.svg'), pointer;
}
.nav__button {
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.5rem;
  padding: 17px 40px;
  color: white;
  background-color:#4B3542 ;
  border-radius: 8px;
}
@media screen and (max-width: 1050px) {
  .nav__buttons>*:not(:last-child) {
  padding: 0 10px;
}
}
@media screen and (max-width: 900px) {
  .nav__container {
margin: 0 20px;
}
}
</style>
