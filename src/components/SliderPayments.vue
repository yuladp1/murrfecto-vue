<template>
  <div class="banner">
    <div class="slideMenu">
      <div
       
        class="slide active"
            >
        <h3>Оплата1</h3>
      </div>
      <div
        class="slide"
     
      >
        <h3>Оплата2</h3>
      </div>
      <div
        class="slide"

      >
        <h3>Оплата3</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider-payments',
  data() {
    return {
      slides: []
    }
  },
  mounted() {
    this.slides = this.$el.querySelectorAll('.slide');
    for (const slide of this.slides) {
    slide.addEventListener('click', () => {
      this.deleteActiveClass()
        slide.classList.add('active')
    })
}

  },
  methods: {
    deleteActiveClass() {
      this.slides.forEach((s) => s.classList.remove('active'))
    }
    // onClickAction() {
    //   for (const slide of this.slides) {
    //     this.deleteActiveClass()};
    //     this.slide.classList.add('active')
      
    // }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  overflow: hidden;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.slideMenu {
  width: 100%;
  display: flex;
  padding: 0 20px;
}

.slide {
  height: 60vh;
  border-radius: 20px;
  cursor: pointer;
  color: white;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: all 500ms ease-in-out;
  background-image: url('../assets/cat2.jpg');
}

.slide h3 {
  position: absolute;
  font-size: 24px;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
  background-color: #1c63cd56;
}

.slide.active {
  flex: 8;
}

.slide.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
