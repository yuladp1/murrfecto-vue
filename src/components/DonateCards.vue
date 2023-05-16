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
display: flex;
    flex-direction: column;
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

img:hover {
  scale: 120%;
  cursor: grab;
}
.cards__text {
 min-height: 166px;
  background-color: #D0BEC4;
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .cards__text>h3 {
  display: flex;
  font-weight: 600;
font-size: 2rem;
margin: 16px 0 8px 0;
text-align: center;
}
.cards__text>p {
  font-weight: 400;
font-size: 1.25rem;
margin: 0 8%;
line-height: 1.88rem;
text-align: center;
}
@media screen and (max-width: 900px) {
  .donate-cards__container {
margin: 0 20px;
}
}
@media screen and (max-width: 1000px) {
  .cards__container {
  display: flex;
flex-direction: column;
align-items: center;
 }
 .cards__container>*:not(:last-child) {
  margin-bottom: 20px;
 }
 figure {
  width: 35%;
}
.card-donate {
  width: 90%;
}
}
</style>
