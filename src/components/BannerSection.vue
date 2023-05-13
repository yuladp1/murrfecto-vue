<template>
  <div class="banner__container" >
    <h1 class="banner__text">Навіщо жити без кота, якщо можна жити з котом</h1>
  <figure>
    <img src="../assets/banner/banner.png" alt="">
  </figure>
</div>
</template>

<script>
export default {
  name: "BannerSection",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.banner__container {
  position: relative;
  display: flex;
    justify-content: center;
}
.banner__text {
  position: absolute;
  top: 10%;
  font-size: 3.13rem;
  color: white;
flex: 1 1;
padding: 0 20px;
}

</style>