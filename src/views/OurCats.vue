<template>
  <section>
    <div class="our-cats__header" id="our-cats_top">
      <h2>Наші хвости</h2>
    </div>
    <div class="all-cards__wrapper">
      <div class="one-card__wrapper" v-for="item in counter.catsArray" :key="item.ID">
        <div class="front-card__wrapper">
          <figure>
            <img :src="item.images[0]" alt="" />
          </figure>
          <div class="front-card__text">
            <p class="front-card__text__name">{{ item.CatsName }}</p>
            <p class="front-card__text__gender">{{ item.sex }}, {{ item.age }}</p>
            <p class="front-card__text__chip">{{ item.chip }}</p>
          </div>
        </div>
        <div class="back-card__wrapper">
          <figure>
            <img :src="item.images[1]" alt="" />
          </figure>
          <div class="back-card__text">
            <button @click="counter.goToCatCard(item.ID)">Детальніше</button>
          </div>
        </div>
      </div>
    </div>
    <a href="#our-cats_top">Повернутися</a>
  </section>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
import { onMounted } from 'vue'
const counter = useCounterStore()
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style lang="scss" scoped>
.our-cats__header {
  background-color: #d0bec4;
  width: 100%;
  padding: 93px 0;
}
h2 {
  padding-bottom: 0;
}
.cards-section__container {
  margin: 0 80px;
  padding-top: 120px;
}
.all-cards__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 100px 5%;
  row-gap: 20px;
}
.one-card__wrapper {
  width: 305px;
  height: 424px;
  position: relative;
  flex-wrap: wrap;
}
.one-card__wrapper:hover {
  cursor: url('../assets/icons/paw.svg'), pointer;
}
.front-card__wrapper,
.back-card__wrapper {
  width: 100%;
  height: 424px;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.6s linear;
  background-color: white;
  border-radius: 20px;
}
.front-card__wrapper {
  transform: perspective(600px) rotateY(0deg);
}
.front-card__text__name {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
}
.front-card__text__gender,
.front-card__text__chip {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
}
.front-card__text__gender:before {
  content: url('../assets/icons/paw-small.svg');
  width: 24px;
  height: 24px;
}
.front-card__text__chip:before {
  content: url('../assets/icons/chip.svg');
}
.back-card__wrapper {
  transform: perspective(600px) rotateY(180deg);
}
figure {
  width: 100%;
  height: 295px;
  object-fit: contain;
  overflow: hidden;
  border-radius: 20px;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.front-card__text {
  height: 129px;
  width: 100%;
  padding-top: 20px;
  padding-left: 16px;
}
.back-card__text {
  display: flex;
  justify-content: center;
}
.back-card__text > button {
  padding: 16px 80px;
  border: 3px solid #4b3542;
  border-radius: 8px;
  background-color: white;
  margin-top: 35px;
}
.one-card__wrapper:hover > .front-card__wrapper {
  transform: perspective(600px) rotateY(-180deg);
}
.one-card__wrapper:hover > .back-card__wrapper {
  transform: perspective(600px) rotateY(0deg);
}
.see-all-cats {
  margin: 60px 0 120px 0;
  text-decoration: underline;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
}
a {
  display: none;
}
@media screen and (max-width: 768px) {
  .all-cards__wrapper {
  padding: 100px 5% 0 5%;
  }
  a {
    color:  #4F5A69;
  display: block;
  text-transform: uppercase;
  font-family: Nunito Sans;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
text-align: center;
text-decoration: underline;
padding: 32px  0 82px 0;
}

}

@media screen and (max-width: 680px) {
  .all-cards__wrapper {
    flex-direction: column;
    padding: 32px 5% 0 5%;
  }

  }



@media screen and (max-width: 430px) {
  .our-cats__header {
  padding: 18px 0;
  h2 {
    font-size: 2rem;
  }
}
a {
  padding: 32px 0;
}
}
</style>
