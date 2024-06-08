<template>
  <div>
    <div class="container" id="bookTable">
      <div class="row">
        <!-- Tabela dos livros que já foram lidos -->
        <div class="col-md-12 col-lg-6 mt-5 books-table">
          <h4>Leituras Finalizadas</h4>
          <table class="table border">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Autor(a)</th>
                <th scope="col">Data da Publicação</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in booksConfirm" :key="item._id">
                <td>{{ item.title }}</td>
                <td>{{ item.author }}</td>
                <td class="text-center">{{ item.publicationYear }}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteBook(item._id)">
                    <img
                      src="../assets/img/trash-delete.svg"
                      alt="icone de lixeira para deletar"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Tabela dos livros que ainda NÃO foram lidos -->
        <div class="col-md-12 col-lg-6 mt-5 read-books-table">
          <h4>Lista de Espera</h4>
          <table class="table border">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Autor(a)</th>
                <th scope="col">Data da Publicação</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in nextBooks" :key="item._id">
                <td>{{ item.title }}</td>
                <td>{{ item.author }}</td>
                <td>{{ item.publicationYear }}</td>
                <td>
                  <button
                    class="btn btn-primary btn-edit"
                    @click="editBook(item)"
                  >
                    <img
                      src="../assets/img/pencil-edit.svg"
                      alt="icone de lápis para editar"
                    />
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" @click="deleteBook(item._id)">
                    <img
                      src="../assets/img/trash-delete.svg"
                      alt="icone de lixeira para deletar"
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("book", ["booksConfirm", "nextBooks"]),
  },
};
</script>

<style lang="scss">
h4 {
  color: #872240;
  font-family: monospace;
}
tr {
  font-family: monospace;
}
th {
  color: rgb(80, 76, 76) !important;
} 
.btn-danger{
  background-color: #ad4061;
  color: white;
  border: none;
  &:hover{
      background-color: #e6a4b8;
    }
}
.btn-primary{
  background-color: #7183e9;
  color: white;
  border: none;
  &:hover{
      background-color: #c9c0ec;
    }
}

</style>
