<template>
  <section class="donates__container">
    <h2>Безпечний донат</h2>
    <div class="slider__container">
      <div
        class="slide active"
        :class="{ active: isActiveSlide === 0 }"
        @click="showSlide(0)"
      >
        <div class="payment__buttons">
          <p>Ваша підтримка змінить життя одного кота!</p>
          <div class="buttons__wrapper">
            <button class="button__20">20</button>
            <button class="button__50">50</button>
            <button class="button__100">100</button>
            <button class="button__200">200</button>
            <button class="button__another-sum"></button>
          </div>
        </div>
        <div class="payment__img"></div>
      </div>
      <div class="slide" :class="{ active: isActiveSlide === 1 }" @click="showSlide(1)">
        <div class="payment__buttons"></div>
        <div class="payment__img"></div>
      </div>
      <div class="slide" :class="{ active: isActiveSlide === 2 }" @click="showSlide(2)">
        <div class="payment__buttons"></div>
        <div class="payment__img"></div>
      </div>
    </div>
  </section>
  <section class="donates__container-tablet">
    <h2>Безпечний донат</h2>
    <button class="nav__button">Одноразово</button>
    <button class="nav__button">Щомісячно</button>
    <button class="nav__button">Корм, ліки, іграшки</button>
  </section>
</template>

<script>
export default {
  name: 'slider-payments',
  data() {
    return {
      isActiveSlide: false
    }
  },
  methods: {
    showSlide(index) {
      this.isActiveSlide = index
    }
  }
}
</script>

<style lang="scss" scoped>
.donates__container {
  background-color: #d0bec4;
  padding-bottom: 80px;
}
h2 {
  padding-top: 80px;
}
.slider__container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 470px;
  margin: 0 80px;
}
.slideMenu {
  width: 100%;
  display: flex;
  padding: 0 20px;
}
.slide {
  width: 75%;
  height: 100%;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  display: flex;
  flex: 1;
  background-color: white;
  transition: all 500ms ease-in-out;
}
.payment__buttons {
  background-color: white;
  height: 100%;
  opacity: 0;
  width: 50px;
}
.payment__buttons > p {
  padding: 36px;
  color: #3d4756;
  text-align: center;
}
.buttons__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 56px;
  row-gap: 10px;
  column-gap: 16px;
}
.buttons__wrapper > button {
  background-color: white;
  border: 1px solid #4b3542;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  padding: 8px 10px;
}
.buttons__wrapper > :last-child {
  width: 216px;
}
.payment__img {
  width: 50%;
  height: 100%;
  background-image: url('../assets/donates/cat-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.slide.active {
  flex: 9;
}

.slide.active .payment__buttons {
  width: 50%;
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
  transition: width 0.3s;
}
.donates__container-tablet {
  width: 96%;
  margin: auto;
  display: none;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background: #d0bec4;
  padding: 40px 0;
  h2 {
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    padding: 0 0 32px 0;
  }
  button {
    width: 50%;

    font-weight: 600;
    font-size: 1.25rem;
    text-transform: none;
  }
}
@media screen and (max-width: 900px) {
  .donates__container {
    display: none;
  }
  .donates__container-tablet {
    display: flex;
  }
}
</style>
