<template>
  <div class="container__all">
    <div class="social-media">
      <figure>
        <img src="../assets/icons/socials.svg" alt="" />
      </figure>
      <figure>
        <img src="../assets/icons/linkedin.svg" alt="" />
      </figure>
    </div>
    <div class="contacts">
      <p class="contacts__email"><a href="">sanders@example.com</a></p>
      <p class="contacts__phone"><a href="tel:(505)5550125">(505)5550125</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsTab'
}
</script>

<style lang="scss" scoped>
.container__all {
  font-size: 1rem;
  width: 89%;
  margin: auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aeaeae;
}
a {
  color: #666;
}
.social-media {
  display: flex;
  gap: 20px;
  flex-shrink: 0;
}
.contacts {
  display: flex;
  align-items: center;
  gap: 34px;
}
.contacts__email::before {
  content: '';
  background: url('../assets/icons/email-icon.svg');
  background-size: contain;
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.contacts__phone::before {
  content: '';
  background: url('../assets/icons/phone-icon.svg');
  background-size: contain;
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.contacts__email::before,
.contacts__phone::before {
  content: '';
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
}
.contacts__email,
.contacts__phone {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
@media screen and (max-width: 900px) {
  .container__all {
    width: 96%;
  }
  .contacts {
    gap: 10px;
  }
}
@media screen and (max-width: 768px) {
  .container__all {
    display: none;
  }
}
</style>
