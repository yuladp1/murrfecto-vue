<template>
  <section>
    <div class="wrapper">
      <div class="footer__logo">
        <figure>
          <img src="../assets/footer/logo-footer.svg" alt="" />
        </figure>
        <button class="nav__button">Нагодуй кота</button>
      </div>
      <div class="footer__menu">
        <a @click="base.closeModalAndNavigate('/about')">Про притулок</a>
        <a @click="base.closeModalAndNavigate('/our-cats')">Наші хвости</a>
      </div>
      <div class="footer__contacts">
        <p>Контакти</p>
        <ul>
          <li><a href="tel:+380636286630">+38 063 628 6630</a></li>
          <li><a href="tel:+380675681788">+38 067 568 1788</a></li>
          <li>info@murrfecto.site</li>
        </ul>
      </div>
      <div class="footer__policy">
        <a href="../../public/politic.pdf" target="blank">Політика конфіденційності</a>
        <a>Правила поведінки на сайті</a>
      </div>
      <div class="footer__social-icons">
        <figure class="footer__instagram">
          <img src="../assets/icons/instagram-footer.svg" alt="" />
        </figure>
        <figure class="footer__fb"><img src="../assets/icons/fb-footer.svg" alt="" /></figure>
      </div>
    </div>
    <a>Розробка Baza Trainee Ukraine 2023 Всі права захищені.</a>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'FooterSection',
  setup() {
    const base = useCounterStore()
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    return {
      base
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #515151;
  color: white;
  width: 89%;
  padding: 60px 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // flex-wrap: nowrap;
  // align-items: flex-start;
  // justify-content: space-between;
  gap: 47px;
}
.wrapper {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
}
a {
  color: white;
  display: block;
}
a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: white;
}
.footer__menu,
.footer__contacts,
.footer__policy {
  font-weight: 700;
  font-size: 1.13rem;
  line-height: 1.56rem;
}
.footer__logo > figure {
  width: 197px;
  height: 82px;
}
.nav__button {
  margin-top: 25px;
}
.footer__social-icons > *:not(:last-child) {
  margin-bottom: 20px;
}

.footer__logo > figure > img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1200px) {
  section {
    padding: 60px 15px;
  }
}

@media screen and (max-width: 900px) {
  section,
  .wrapper {
    width: 96%;
    flex-wrap: wrap;
    // column-gap: 60px;
    row-gap: 40px;
  }
  .footer__social-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .footer__social-icons > *:not(:last-child) {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 450px) {
  section {
    width: 100%;
    padding: 40px 16px;
  }
  .footer__logo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .nav__button {
    width: 100%;
  }
  .wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 32px;
  }
  .wrapper div {
    align-items: center;
  }
}
</style>
