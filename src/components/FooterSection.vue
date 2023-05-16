<template>
  <section>
<div class="footer__logo">
  <figure>
    <img src="../assets/footer/logo-footer.svg" alt="">
  </figure>
  <button class="nav__button">Нагодувати кота</button>
</div>
<div class="footer__menu">
      <a>Про притулок</a>
    <a>Наші хвости</a>
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
  <a>Політика конфіденційності</a>
  <a>Правила поведінки на сайті</a>
</div>
<div class="footer__social-icons">
  <figure class="footer__instagram"><img src="../assets/icons/instagram-footer.svg" alt=""></figure>
  <figure class="footer__fb"><img src="../assets/icons/fb-footer.svg" alt=""></figure>
</div>

  </section>
</template>

<script>
export default {
  name: "FooterSection",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
section {
  background-color: #515151;
  color: white;
  width: 100%;
  padding: 60px 80px;
  margin: 0;
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
.footer__menu,.footer__contacts, .footer__policy {
  font-weight: 700;
font-size: 1.13rem;
line-height: 1.56rem;
}
.footer__logo>figure {
width: 197px;
height: 82px;
}
.nav__button {
  margin-top: 25px;
}
.footer__social-icons>*:not(:last-child) {
margin-bottom: 20px;
}


.footer__logo>figure>img {
width: 100%;
height: 100%;
}
</style>