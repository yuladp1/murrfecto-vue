<template>
  <section class="donate-cards__container">
    <h2>Як підтримати котиків</h2>
    <div class="cards__container">
      <div class="card-donate">
        <div class="donate-img-container">
          <figure>
            <img src="../assets/donates/donate-one-plate.png" alt="" />
          </figure>
        </div>
        <div class="cards__text">
          <h3>Одноразово</h3>
          <p>Один клік - порція корму</p>
        </div>
      </div>
      <div class="card-donate">
        <div class="donate-img-container">
          <figure>
            <img src="../assets/donates/donate-three-plates.png" alt="" />
          </figure>
        </div>
        <div class="cards__text">
          <h3>Щомісячно</h3>
          <p>Щомісячний платіж означає, що кіт буде під наглядом протягом місяця</p>
        </div>
      </div>
      <div class="card-donate">
        <div class="donate-img-container">
          <figure>
            <img src="../assets/donates/donate-toys.png" alt="" />
          </figure>
        </div>
        <div class="cards__text">
          <h3>Корм, ліки, іграшки</h3>
          <p>З радістю приймаємо корм, засоби для обробки, ліжка і іграшки для кошенят</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DonateCards',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.donate-cards__container {
  padding-top: 120px;
  margin: 0 80px;
}
.cards__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
 }
.card-donate {
  width: 32%;
  border: 2px solid #D0BEC4;
border-radius: 12px;
}
figure {
  width: 55%;
  margin:auto;
}
.donate-img-container {
  background-color: white;
  height: 300px;
  display: flex;
}
.cards__text {
  background-color: #D0BEC4;
}
img:hover {
  scale: 120%;
  cursor: grab;
}
</style>
