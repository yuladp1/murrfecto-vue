<template>
  <BannerSection/>
  <CollageSection/>
  <DonateCards/>
</template>

<script>
import BannerSection from '../components/BannerSection.vue';
import CollageSection from '../components/CollageSection.vue';
import DonateCards from '../components/DonateCards.vue';
export default {
  name: "HomeView",
  components: {
    BannerSection,
    CollageSection,
    DonateCards
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