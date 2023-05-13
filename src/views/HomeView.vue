<template>
  <BannerSection/>
  <CollageSection/>
</template>

<script>
import BannerSection from '../components/BannerSection.vue';
import CollageSection from '../components/CollageSection.vue';
export default {
  name: "HomeView",
  components: {
    BannerSection,
    CollageSection,
    
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>