<template>
  <section >
    <div class="one-cat__header" >
      <h2>{{this.cat.CatsName}}</h2>
    </div>
    <div class="wrapper" >
      <div class="images">
        <figure class="image-main"><img :src="this.cat.images[0]" alt=""></figure>
        <figure class="image-1"><img :src="this.cat.images[1]" alt=""></figure>
        <figure class="image-2"><img :src="this.cat.images[2]" alt=""></figure>
        <figure class="image-3"><img :src="this.cat.images[3]" alt=""></figure>
      </div>
      <div class="info">
        <h3>Ти можеш допомогти {{this.cat.CatsName}}</h3>
        <div class="field-name">Стать:</div>
        <div class="field-value">{{ this.cat.sex }}</div>
        <div class="field-name">Вік:</div>
        <div class="field-value">{{ this.cat.age }}</div>
        <div class="field-name">Наявність чіпа:</div>
        <div class="field-value">{{ this.cat.chip }}</div>
        <div class="field-name cat-info">Інформація</div>
         <div class="field-value">{{ this.cat.info }}</div>
      </div>
    </div>
    <CardsSection/>
  </section>
</template>

<script>
import { useCounterStore } from '../stores/counter'
import { computed, onMounted } from "vue";
import CardsSection from '../components/CardsSection.vue';

export default {
  name: "OneCat",
  components: {
    CardsSection
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const counter = useCounterStore();
    const cat = computed(() => counter.catsArray.find((c) => c.ID === props.id));

    onMounted(() => {
      window.scrollTo(0,0)
    });

    return {
      counter,
      cat
    };
  },
};
</script>


<style lang="scss" scoped>
.one-cat__header {
  background-color: #D0BEC4;
  width: 100%;
  padding: 93px 0;
}
h2 {
  padding-bottom: 0;
}
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 9%;
  justify-content: center;
  margin-top: 90px;
}
.images {
  width: 44%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 20px;
}
.images>figure>img {
  border-radius: 12px;
}
.info {
  width: 36%;
}
.image-main {
  width: 100%;
  height: auto;
}
.image-1, .image-2, .image-3 {
  width: 31%;
}
h3 {
  font-weight: 700;
font-size: 2.5rem;
line-height: 3.44rem;
text-align: center;
padding: 0 10px;
}
.field-name {
  font-weight: 600;
font-size: 1.5rem;
line-height: 2rem;
}
.cat-info {
  border-bottom: 1px solid #4B3542;
  // padding-bottom: ;
}
.field-value:not(:last-child) {
  font-weight: 400;
font-size: 1.25rem;
border: 1px solid #4B3542;
border-radius: 8px;
width: 197px;
height: 42px;
display: flex;
    align-content: center;
    align-items: center;
}
.field-value:last-child {
  padding-top: 12px;
}

</style>