<template>
  <section class="collage__container">
    <div class="collage__images">
      <figure class="collage__image-1">
        <img src="../assets/collage/1.png" alt="cats" />
      </figure>
      <figure class="collage__image-2">
        <img src="../assets/collage/2.png" alt="cats" />
      </figure>
      <figure>
        <img class="collage__image-3" src="../assets/collage/3.png" alt="cats" />
      </figure>
      <figure>
        <img class="collage__image-4" src="../assets/collage/4.png" alt="cats" />
      </figure>
      <figure>
        <img class="collage__image-5" src="../assets/collage/5.png" alt="cats" />
      </figure>
      <figure>
        <img class="collage__image-6" src="../assets/collage/6.png" alt="cats" />
      </figure>
    </div>
    <div class="collage__text">
      <h2>Хто ми</h2>
      <ul>
        <li>
          Притулок Murrfecto в Києві опікується котами, які поруч з нами переживають
          буремні часи.
        </li>
        <li>
          Наш притулок має близько 20 хвостів, що живуть поруч. Прайд підтримується
          стабільною сумою коштів з місяця в місяць.
        </li>
        <li>
          Коти стійко переносять все, що випадає на їхню нелегку котячу долю в цей час,
          але в наших силах щоденно їх погодувати і почухати за вухом.
        </li>
        <li>
          Запрошуємо тебе стати віртуальним володарем справжнього кота. І він тобі
          віддячить!
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "CollageSection",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.collage__container {
  display: flex;
  margin: 0 80px;
  padding-top: 7.5rem;
}

.collage__images,
.collage__text {
  flex: 1 1 45%;
  flex-direction: column;
}
.collage__images {
  position: relative;
  height: 656px;
  width: 652px;

}
.collage__image-1 {
  position: absolute;
  width: 49%;
  height: auto;
 top: 0;
 left: 0;
}
.collage__image-2 {
  position: absolute;
  width: 38%;
  height: auto;
top: 24px;
left: 45%;
}
.collage__image-3 {
  position: absolute;
  width: 50%;
  height: auto;
  top: 234px;
  left: 6%;
}
.collage__image-4 {
  position: absolute;
  width: 40%;
  height: auto;
  top: 291px;
  right: 0;
}
.collage__image-5 {
  position: absolute;
  width: 42%;
  height: auto;
  bottom: 0;
  left: 0;
}
.collage__image-6 {
  position: absolute;
  width: 45%;
  height: auto;
  bottom: 39px;
  left: 53%;
}
.collage__text {
  display: flex;
  padding-left: 5%;
}
.collage__text > ul {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  line-height: 1.88rem;
}
.collage__text > ul > li {
  display: flex;
}
.collage__text > ul > li::before {
  content: url("../assets/icons/paw.svg");
  padding-right: 12px;
}
.collage__text > ul > li:not(:last-child) {
  margin-bottom: 40px;
}
@media screen and (max-width: 900px) {
  .collage__container {
    margin: 0 20px;
  }
}
</style>
