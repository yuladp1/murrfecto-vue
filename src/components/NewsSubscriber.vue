<template>
  <section>
    <h2>Стежте за останніми подіями притулку</h2>
    <p>Залиште свій email, і ми вам надішлемо новини про життя притулку</p>
    <form action="">
      <input type="email" name="" placeholder="Ваш email " />
      <button type="submit">Надіслати</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 120px;
  font-weight: 400;
  font-size: 1.25rem;
  width: 100%;
}
h2 {
  padding: 0 10%;
  line-height: 3.44rem;
}
form {
  display: flex;
  justify-items: center;
  justify-content: center;
  padding-bottom: 100px;
  width: 90%;
}
p {
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
  padding: 20px 0 40px 0;
}
input {
  width: 40%;
  height: 56px;
  background: white;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: #aeaeae;
  border-radius: 8px 0px 0px 8px;
}
button {
  width: 19%;
  height: 56px;
  background-color: white;
  border: 3px solid #4b3542;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  color: #4b3542;
}
button:hover {
  background-color: #d0bec4;
}
</style>
