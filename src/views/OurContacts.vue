<template>
  <section>
    <div class="our-contacts__header">
      <h2>Контакти</h2>
    </div>
    
    <div class="contacts__wrapper">
      <div class="contacts">
        <div class="contacts__phone">
          <div class="contacts">
            <p class="contacts__email"><a href="">sanders@example.com</a></p>
            <p class="contacts__phone"><a href="tel:(505)5550125">(505)5550125</a></p>
          </div>
          <div class="social-media">
            <figure>
              <img src="../assets/icons/socials.svg" alt="" />
            </figure>
            <figure>
              <img src="../assets/icons/linkedin.svg" alt="" />
            </figure>
          </div>
        </div>
        <div class="contacts__NP">
          <p>Наше відділення НП для посилок</p>
          <p>№225 м.Київ пр.С.Бандери +38 063 6286630</p>
        </div>
        <div class="contacts__docs">Реєстраційні дані ГО</div>
      </div>
      <div class="contact__form"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurContacts',
  created() {},
  data() {
    return {}
  },
  props: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.our-contacts__header {
  background-color: #D0BEC4;
  width: 100%;
  padding: 93px 0;
}
h2 {
  padding-bottom: 0;
}
.contacts {
  width: 30%;
}
.contacts__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px 0;
}
.contacts > div {
  padding: 24px 40px;
  border: 0.5px solid #4b3542;
  border-radius: 8px;
}
.contacts > div:not(:last-child) {
  margin-bottom: 20px;
}
.contacts__email::before {
  background: url('../assets/icons/email-icon.svg');
 
  width: 20px;
  height: 16px;
  margin-right: 8px;
}
.contacts__phone::before {
  background: url('../assets/icons/phone-icon.svg');
  width: 20px;
  height: 24px;
  margin-right: 14px;
}
.social-media {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.social-media >figure {
  width: 32px;
  height: 32px;
}
.contact__form {
  width: 36%;
}
</style>
