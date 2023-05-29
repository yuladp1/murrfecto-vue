<template>
  <!-- <donate-modal/> -->
  <BannerSection />
  <CollageSection />
  <DonateCards />
  <CardsSection />
  <SliderPayments />
  <NewsSubscriber />
</template>

<script>
import BannerSection from '../components/BannerSection.vue'
import CollageSection from '../components/CollageSection.vue'
import DonateCards from '../components/DonateCards.vue'
import CardsSection from '../components/CardsSection.vue'
import SliderPayments from '../components/SliderPayments.vue'
import NewsSubscriber from '../components/NewsSubscriber.vue'
export default {
  name: 'HomeView',
  components: {
    BannerSection,
    CollageSection,
    DonateCards,
    CardsSection,
    SliderPayments,
    NewsSubscriber
  },
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
