<template>
  <div>
    <h1>cards</h1>
    <div class="all-cards__wrapper">
    <div class="one-card__wrapper">
      <div class="front-card__wrapper">
        <figure>
        <img src="../assets/catHotpot.png" alt="" />
        </figure>
      </div>
      <div class="back-card__wrapper">
        <figure>
        <img src="../assets/cat-real.png" alt="" />
        </figure>
      </div>
    </div>
    <div class="one-card__wrapper">
      <div class="front-card__wrapper">
        <figure>
        <img src="../assets/catHotpot.png" alt="" />
        </figure>
      </div>
      <div class="back-card__wrapper">
        <figure>
        <img src="../assets/cat-real.png" alt="" />
        </figure>
      </div>
    </div>
    <div class="one-card__wrapper">
      <div class="front-card__wrapper">
        <figure>
        <img src="../assets/catHotpot.png" alt="" />
        </figure>
      </div>
      <div class="back-card__wrapper">
        <figure>
        <img src="../assets/cat-real.png" alt="" />
        </figure>
      </div>
    </div>
    <div class="one-card__wrapper">
      <div class="front-card__wrapper">
        <figure>
        <img src="../assets/catHotpot.png" alt="" />
        </figure>
      </div>
      <div class="back-card__wrapper">
        <figure>
        <img src="../assets/cat-real.png" alt="" />
        </figure>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'cardsSection',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {}
}
</script>

<style scoped>
.all-cards__wrapper {
  display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.one-card__wrapper {
  width: 200px;
  height: 400px;
  position: relative;
}
.front-card__wrapper,
.back-card__wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform .6s linear ;
}
.front-card__wrapper {
  transform: perspective(600px) rotateY(0deg);
  }
  .back-card__wrapper {
    transform: perspective(600px) rotateY(180deg);
  }
figure {
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
}
img {
  object-fit: cover;
    width: 100%;
    height: 100%;
}
.one-card__wrapper:hover >.front-card__wrapper {
  transform: perspective(600px) rotateY(-180deg);
}
.one-card__wrapper:hover >.back-card__wrapper {
  transform: perspective(600px) rotateY(0deg);
}
</style>
