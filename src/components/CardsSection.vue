<template>
  <div class="cards-section__container">
    <h2>Наші хвости</h2>
    <div class="all-cards__wrapper">
      <div class="one-card__wrapper" v-for="item in someCats" :key="item.ID">
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
    <p class="see-all-cats" @click="router.push({ path: `/our-cats` })">Переглянути всіх</p>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counter'
import { useRouter } from 'vue-router'
export default {
  components: {},
  setup() {
    const counter = useCounterStore()
    const router = useRouter()
    const someCats = counter.catsArray.slice(0,4);
    return { counter, router, someCats }
  }
}
</script>

<style scoped>
.cards-section__container {
  width: 89%;
  margin: auto;
  padding-top: 120px;
}
.all-cards__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;
}
.one-card__wrapper {
  width: 305px;
  height: 424px;
  position: relative;
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
.see-all-cats:hover {
  cursor: url('../assets/icons/paw.svg'), pointer;
}
@media screen and (max-width: 900px) {
  .cards-section__container {
  width: 96%;
  padding-top: 80px;
}
.all-cards__wrapper {
  gap: 20px;
}

.one-card__wrapper {
  flex: 1 1 350px;
 }
}
</style>
