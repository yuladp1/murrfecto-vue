<template>
  <div class="banner__container">
    <h1 class="banner__text">Навіщо жити без кота, якщо можна жити з котом</h1>
    <!-- <figure>
      <img src="../assets/banner/banner.png" alt="" />
         </figure> -->
    <button class="nav__button" @click="base.showModalDonate = true">Нагодуй кота</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const base = useCounterStore();
</script>

<style lang="scss" scoped>
.banner__container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 89%;
  height: 600px;
  margin: auto;
  background-image: url("../assets/banner/banner.png");
  background-repeat: no-repeat;
    background-size: cover;
}
.banner__text {
  position: absolute;
  top: 10%;
  font-size: 3.13rem;
  color: white;
  flex: 1 1;
  padding: 0 20px;
}
figure {
  flex: 1 1;
}
.nav__button {
  display: none;
}
@media screen and (max-width: 900px) {
  .banner__container {
    width: 96%;
    height: 626px;
  }
}
@media screen and (max-width: 390px) {
  .banner__container {
    height: 765px;
    display: flex;
    position: relative;
    // background-image: url('../assets/banner/banner-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .banner__text {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .nav__button {
    display: flex;
    margin-bottom: 20px;
    position: absolute;
    height: 64px;
    width: 92%;
    bottom: 46px;
  }
}
</style>
