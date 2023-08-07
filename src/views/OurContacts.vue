<template>
  <section>
    <div class="our-contacts__header">
      <h2>Контакти</h2>
    </div>

    <div class="contacts__wrapper">
      <div class="contacts">
        <div class="contacts__phone-email">
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
        <div class="contacts__docs">
          <p>Реєстраційні дані ГО</p>
          <p>ГО "Бі Ай Ті", код.ЄДРПОУ 44993792, м.Київ, вул.Петропавлівська, 15</p>
    
          
          </div>
      </div>
      <div class="contact__form">
        <h3>Зворотний зв’язок</h3>
        <p>Якщо у Вас є запитання або пропозиції, напишіть нам</p>
        <form action="">
          <label for="">Ім’я</label>
          <input v-model="text" />
          <label for="">Електронна адреса</label>
          <input v-model="email" type="email" class="email" />
          <label for="">Повідомлення</label>
          <textarea v-model="message" type="text" />
          <button class="nav__button">Надіслати</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.email:invalid {
  color: red;
}
.our-contacts__header {
  background-color: #d0bec4;
  width: 100%;
  height: 240px;
  display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
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
  gap: 9px;
}
.contacts > div {
  padding: 24px 40px;
  border: 0.5px solid #4b3542;
  border-radius: 8px;
}
.contacts__email, .contacts__phone {
 position: relative;
 display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 34px;
    a {
      line-height: 30px;
    }
}
.contacts__email::before {
  position: absolute;
    top: 0;
    left: 0;
     content: "";
    background: url(/src/assets/icons/email-icon.svg);
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
}
.contacts__phone::before {
  position: absolute;
    top: 0;
    left: 0;
  content: '';
  background: url('../assets/icons/phone-icon.svg');
  width: 25px;
    height: 25px;
    background-repeat: no-repeat;
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
.contacts__NP>p:first-child, .contacts__docs>p:first-child {
  font-weight: 700;
  padding-bottom: 12px;
}
.contact__form {
  width: 36%;
  display: flex;
  flex-direction: column;
  h3, p {
    text-align: center;
  }
  h3 {
    font-family: Nunito;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
  }
  p {
    padding: 10px 0 20px 0;
  }
  button {
    width: 70%;
    margin: 32px auto 0 auto;
  }
}
label {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.88rem;
}
input,
textarea {
  background: #f2f2f2;
  border: 0.5px solid #aeaeae;
  width: 100%;
}
textarea {
  height: 105px;
}
@media screen and (max-width: 780px) {
  .our-contacts__header {
    height: 148px;
    padding: 0;
  }
  .contacts__wrapper {
    margin: 40px 20px;
    justify-content: space-between;
    }
  .contacts__wrapper> div {
    width: 45%;
  }
  .contacts>div {
    padding: 20px 0 20px 12px;
  }
}
@media screen and (max-width: 475px) {
  .contacts__wrapper {
    flex-direction: column;
    gap: 56px;
  }
  .contacts__wrapper > div {
    width: 90%;
  }
}
@media screen and (max-width: 430px) {
  .our-contacts__header {
    height: 80px;
  }
}
</style>
