<template>
  <section>
    <div class="one-cat__header">
      <h2>{{this.cat.CatsName}}</h2>
    </div>
    <div class="wrapper">
      <div class="images">
        <figure class="image-main"><img :src="this.cat.images[0]" alt=""></figure>
        <figure class="image-1"><img :src="this.cat.images[1]" alt=""></figure>
        <figure class="image-2"><img :src="this.cat.images[2]" alt=""></figure>
        <figure class="image-3"><img :src="this.cat.images[3]" alt=""></figure>
      </div>
      <div class="info"></div>
    </div>
  </section>
</template>

<script>
import { useCounterStore } from '../stores/counter'
import { computed } from "vue";
export default {
   name: "OneCat",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const counter = useCounterStore()
     const cat = computed(() =>
      counter.catsArray.find((c) => c.ID === props.id)
    );
   const imageMain = this.cat.images[0]

    return {
      counter, cat,imageMain
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
}
.images {
  width: 44%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
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
</style>