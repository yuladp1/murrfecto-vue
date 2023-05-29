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
      <div class="contact__form">
        <h3>Зворотний зв’язок</h3>
        <p>Якщо у Вас є запитання або пропозиції, напишіть нам</p>
        <form action="">
        <label for="">Ім’я</label>
        <input v-model="text" />
        <label for="">Електронна адреса</label>
        <input v-model="email" type="email" class="email"/>
        <label for="">Повідомлення</label>
        <textarea v-model="message" type="text" />
        <button class="nav__button">Надіслати</button>
      </form>
      </div>
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
.email:invalid {
  color: red;
}
.our-contacts__header {
  background-color: #d0bec4;
  width: 100%;
  padding: 93px 0;
}
h2 {
  padding-bottom: 0;
}

.contacts__wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 80px auto;
  justify-content: center;
  gap: 9%;
}
.contacts {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contacts > div {
  padding: 24px 40px;
  border: 0.5px solid #4b3542;
  border-radius: 8px;
}
.contacts__email {
  display: block;
}
.contacts__email::before {
  content: '';
  background: url('../assets/icons/email-icon.svg');
  width: 20px;
  height: 16px;
  margin-right: 8px;
}
.contacts__phone::before {
  content: '';
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
.social-media > figure {
  width: 32px;
  height: 32px;
}
.contact__form {
  width: 36%;
  display: flex;
  flex-direction: column;
  button {
    width: 70%;
    margin: 32px auto 0 auto;
  }
}
label {
  font-weight: 400;
  font-size: 1.25rem ;
line-height: 1.88rem ;
}
input, textarea {
  background: #F2F2F2;
  border: 0.5px solid #AEAEAE;
  width: 100%;
}
textarea {
  height: 105px;
}
</style>
