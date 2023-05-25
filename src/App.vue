<script>
import { useCounterStore } from './stores/counter'
import ContactsTab from './components/ContactsTab.vue'
import HeaderMenu from './components/HeaderMenu.vue'
import FooterSection from './components/FooterSection.vue'
export default {
  components: {
    ContactsTab,
       HeaderMenu,
       FooterSection
   },
  setup() {
    const base = useCounterStore()
    return { base }
  }
}
</script>

<template>
  <div class="__container-all">
    <div>
      <ContactsTab/>
    </div>
    <div>
      <HeaderMenu />
    </div>
    <div>
      <RouterView />
    </div>
    <div>
      <FooterSection/>
    </div>
  </div>
</template>

<style>
@import url('./normalize.css');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap');
#app {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background-color: #F2F2F2;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  color: #3D4756;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h2 {
  font-size: 2.5rem ;
font-weight: 700;
text-align: center;
padding-bottom: 60px;
}
.nav__button {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 1.5rem;
  padding: 17px 40px;
  color: white;
  background-color:#4B3542 ;
  border-radius: 8px;
}
</style>
