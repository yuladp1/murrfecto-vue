<template>
  <nav class="nav__container">
    <div class="nav__brand">
      <figure @click="router.push({ path: `/` })">
        <img class="navbar-item" src="../assets/icons/logo-murrfecto.svg" />
      </figure>
    </div>
    <div class="wrapper-menu-button">
      <div class="nav__buttons">
        <p
          @click="base.closeModalAndNavigate('/about')"
   
        >
          Про притулок
        </p>
        <p
          @click="base.closeModalAndNavigate('/our-cats')"
             
        >
          Наші хвости
        </p>
        <p
          @click="base.closeModalAndNavigate('/contacts')"
    
        >
          Контакти
        </p>
      </div>
      <button class="nav__button" @click="base.showModalDonate=true">
        Нагодуй кота
      </button>
    </div>
    <div class="burger" @click="base.showModalDropdown = true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/counter'
export default {
  setup() {
    const base = useCounterStore()
    const router = useRouter()
    const activeMenuItem = ref('')

    onMounted(() => {
      nextTick(() => {
             })
    })

    return { base, router, activeMenuItem}
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
.nav__buttons > p {
  border-bottom: 2px solid #f2f2f2;
}
.nav__buttons > p:hover {
  cursor: pointer;
  border-bottom: 2px solid #4b3542;
}
.burger {
  display: none;
  width: 32px;
  height: 32px;
}
.burger:hover {
  cursor: pointer;
}
.active {
  border-bottom: 2px solid #4b3542;
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
    justify-content: space-around;
    span {
      width: 100%;
      border: 1px solid #4b3542;
    }
  }
}
</style>
