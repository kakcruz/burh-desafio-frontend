<template>
  <div id="app">
    <nav class="">
      <h1>Organize suas Leituras</h1>
      <p>
        Torne seu hábito de leitura mais efetivo utilizando <br />
        o gerenciador abaixo
      </p>
    </nav>
    <AddBook />
    <BookTable />
    <router-view />
  </div>
</template>

<script>
import AddBook from "./views/AddBook.vue";
import BookTable from "./views/BookTable.vue";

export default {
  name: "App",
  components: {
    AddBook,
    BookTable,
  },
};
</script>

<style lang="scss">
@import './assets/scss/variables';

nav {
  height: 237px;
  font-family: $font-primary;
  padding: 55px 70px;
  background-color: #872240;
  color: white
}
h1{
  font-size: 32px;
  font-weight: 700;
}
p{
    font-size: 18px;
  }
</style>
