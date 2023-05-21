<template>
  <section class="about-us">
<div class="about-us__header"><h2>Про притулок</h2></div>
<div class="about-us__content">
  <div class="content-item-wrapper">
    <figure><img src="../assets/about-us/img1.png" alt=""></figure>
    <p>Багато людей хоче завести кота, але не можуть це зробити з певних причин: орендоване житло, спротив родини, переїзди і зайнятість.</p>
  </div>
  <div class="content-item-wrapper">
    
    <p>Є багато котів, які живуть прайдом в більш-менш безпечному місці, мають свої звички і почуваються досить добре, аби була б постійна їжа.</p>
  <figure><img src="../assets/about-us/img2.png" alt=""></figure>
  </div>
  <div class="content-item-wrapper">
    <figure><img src="../assets/about-us/img3.png" alt=""></figure>
    <p>Ми поєднуємо одних з другими, приймаючи від одних щомісячну допомогу, годуючи і лікуючи обраного вами кота і надсилаючи вам новини з досить бурхливого дворового котячого життя</p>
  </div>
</div>
<div class="about-us__info-wrapper">
  <div class="info-item">
    <figure><img src="../assets/about-us/icon-heart.png" alt=""></figure>
    <p>Щоденно годуємо понад 20 котів</p>
  </div>
  <div class="info-item">
    <figure><img src="../assets/about-us/icon-bag.png" alt=""></figure>
    <p>Щомісяця витрачаємо  близько 24 000 грн</p>
  </div>
  <div class="info-item">
    <figure><img src="../assets/about-us/icon-hands.png" alt=""></figure>
    <p>Понад 7 років постійно годуємо стабільний прайд</p>
  </div>
</div>
      </section>
</template>

<style lang="scss" scoped>
.about-us__header {
  background-color: #D0BEC4;
  width: 100%;
  padding: 93px 0;
}
h2 {
  padding-bottom: 0;
}
.about-us__content {
padding: 100px 0;
}
.content-item-wrapper {
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  gap: 80px;
}
.content-item-wrapper:not(:last-child) {
  margin-bottom: 56px;
}
.content-item-wrapper>figure {
  width: 32%;
  height: auto;
}
p {
  width: 36%;
  font-weight: 400;
font-size: 1.25rem;
line-height: 1.88rem;
text-align: center;
}
.about-us__info-wrapper {
     display: flex;
    flex-direction: row;
       align-items: flex-start;
    justify-content: center;
    gap: 14%;
    margin-bottom: 131px;
}
.info-item {
  width: 15%;
  display: flex;
  flex-direction: column;
      align-items: center;
    justify-content: center;
}
.info-item>figure {
  width: 100%;
  height: auto;
}
.info-item>p {
  width: 100%;
}
</style>
