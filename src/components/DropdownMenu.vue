<template>
  <nav v-show="base.showModalDropdown">
    <div class="closeModal" @click="base.showModalDropdown = false"></div>
    <div class="nav__buttons">
      <p @click="base.closeModalAndNavigate('/about')">Про притулок</p>
      <p @click="base.closeModalAndNavigate(`/our-cats`)">Наші хвости</p>
      <p @click="base.closeModalAndNavigate(`/contacts`)">Контакти</p>
    </div>
    <div class="social-media">
      <figure>
        <img src="../assets/icons/socials.svg" alt="" />
      </figure>
      <figure>
        <img src="../assets/icons/linkedin.svg" alt="" />
      </figure>
    </div>
    <div class="contacts">
      <p class="contacts__email"><a href="">sanders@example.com</a></p>
      <p class="contacts__phone"><a href="tel:(505)5550125">(505)5550125</a></p>
    </div>
  </nav>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
const base = useCounterStore()
</script>

<style lang="scss" scoped>
nav {
  z-index: 2;
  width: 51%;
  position: absolute;
  top: 0;
  right: 0;
  background: #f2f2f2;
}
.closeModal {
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 66px 20px 58px auto;
}
.closeModal::before,
.closeModal::after {
  content: '';
  position: absolute;
  top: 10px;
  display: block;
  width: 32px;
  height: 3px;
  background: #4b3542;
}

.closeModal::before {
  transform: rotate(45deg);
}

.closeModal::after {
  transform: rotate(-45deg);
}
.nav__buttons {
  width: 50%;
  margin: 60px auto 40px auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  p {
    font-weight: 700;
    font-size: 1.13rem;
    line-height: 1.56rem;
    text-align: center;
    border-bottom: 2px solid #f2f2f2;
  }
  p:hover {
    cursor: pointer;
    border-bottom: 2px solid #4b3542;
  }
}
.social-media {
  width: 50%;
  margin: auto;
  display: flex;
  gap: 20px;
  flex-shrink: 0;
}
.contacts {
  width: 50%;
  margin: 24px auto 60px auto;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex-direction: column;
}
.contacts__email::before {
  background: url('../assets/icons/email-icon.svg');
  width: 20px;
  height: 24px;
  margin-right: 8px;
}
.contacts__phone::before {
  background: url('../assets/icons/phone-icon.svg');
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.contacts__email::before,
.contacts__phone::before {
  content: '';
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
}
.contacts__email,
.contacts__phone {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
