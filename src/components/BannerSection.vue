<template>
  <div class="banner__container">
    <h1 class="banner__text">Навіщо жити без кота, якщо можна жити з котом</h1>
    <figure>
      <img src="../assets/banner/banner.png" alt="" />
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.banner__container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 89%;
  margin: auto;
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
@media screen and (max-width: 900px) {
  .banner__container {
    width: 96%;
    height: auto;
  }
}
</style>
