<template>
  <Carousel :autoplay="2000" :wrap-around="true" class="carousel__cats">
    <Slide v-for="slide in cats" :key="slide">
     <img :src="`/src/assets/${slide}`" class="carousel__item"/>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <CardsSection/>
  <SliderPayments/>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import CardsSection from '../components/CardsSection.vue';
import SliderPayments from '../components/SliderPayments.vue';
export default { 
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    Pagination,
    CardsSection,
    SliderPayments
  },
setup() {
  const cats = ['./cat.jpg', './cat1.jpg', './cat2.jpg', './cat3.webp'];
  return {cats};
  }
}
</script>
<style>
img, .carousel__cats {
  width: 400px;
  height: 300px;
 }
 .carousel__cats {
  margin: 0 auto;
 }
img {
   object-fit: cover;
}

</style>