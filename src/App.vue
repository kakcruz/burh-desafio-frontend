<template>
  <div id="app">
    <h1 class="text-center mt-4">Gerenciador de Livros</h1>
      <AddBook/>
      <BookTable/>
    <router-view />
  </div>
</template>

<script>
import AddBook from './views/AddBook.vue';
import BookTable from './views/BookTable.vue';

export default {
  name: 'App',
  components:{
    AddBook,
    BookTable,
  }
};
</script>

<style lang="scss">
h1 {
  font-family: monospace;
  color: #872240;
}
nav {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
</style>
