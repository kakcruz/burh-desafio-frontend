<template>
  <div class="add-book">
    <div class="container">
      <!-- Campos de adição dos novos livros -->
      <form
        class="row g-3 mt-5 needs-validation"
        @submit.prevent="submitBook"
        novalidate
      >
        <!-- campo Título do Livro -->
        <div class="col-md-6 col-lg-6 title-field">
          <label for="validationCustom01" class="form-label"
            >Título do Livro</label
          >
          <input
            type="text"
            class="form-control"
            :class="{ invalid: isTitleInvalid }"
            id="validationCustom01"
            v-model="newBook.title"
            required
            placeholder="ex: O Pequeno Príncipe"
          />
          <div v-if="isTitleInvalid" class="invalid-feedback">
            <i class="bi bi-exclamation-circle"></i> O campo Título é obrigatório!
          </div>
        </div>
        <!-- campo Nome do Autor(a) -->
        <div class="col-md-6 col-lg-6 author-field">
          <label for="validationCustom02" class="form-label"
            >Autor/Autora</label
          >
          <input
            type="text"
            class="form-control"
            :class="{ invalid: isAuthorInvalid }"
            id="validationCustom02"
            v-model="newBook.author"
            required
            placeholder="ex: Antoine de Saint-Exupéry"
          />
          <div class="invalid-feedback"><i class="bi bi-exclamation-circle"></i> O campo Autor é obrigatório!</div>
        </div>
        <!-- campo Data da Publicação -->
        <div class="col-md-12 col-lg-6 publication-field mt-5">
          <label for="validationCustom03" class="form-label"
            >Data da publicação</label
          >
          <input
            type="date"
            class="form-control"
            :class="{ invalid: ispublicationYearInvalid }"
            id="validationCustom03"
            v-model="newBook.publicationYear"
            required
          />
          <div class="invalid-feedback">
            <i class="bi bi-exclamation-circle"></i> O campo Data da publicação é obrigatório!
          </div>
        </div>
        <!-- Botões radios -->
        <div class="d-flex col-md-12 col-lg-6 btn-radio mt-5">
          <div class="form-check ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="readStatus"
              id="flexRadioDefault1"
              value="read"
              v-model="newBook.status"
            />
            <label class="form-check-label" for="flexRadioDefault1"
              >Leituras Finalizadas</label
            >
          </div>
          <div class="form-check ms-4">
            <input
              class="form-check-input"
              type="radio"
              name="readStatus"
              id="flexRadioDefault2"
              value="unread"
              v-model="newBook.status"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2"
              >Livros para a Lista de Espera</label
            >
          </div>
        </div>
        <div class="col-12 d-flex mt-5">
          <button class="btn btn-primary" type="submit" alt="botão para adicionar os livros">Adicionar livro</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newBook: {
        title: "",
        author: "",
        publicationYear: "",
        status: "unread",
      },
      validationErrors: {
        title: false,
        author: false,
        publicationYear: false,
      },
    };
  },
  computed: {
    isTitleInvalid() {
      return this.validationErrors.title && !this.newBook.title;
    },
    isAuthorInvalid() {
      return this.validationErrors.author && !this.newBook.author;
    },
    ispublicationYearInvalid() {
      return (
        this.validationErrors.publicationYear && !this.newBook.publicationYear
      );
    },
  },
  methods: {
    ...mapActions("book", ["addBook"]),
    submitBook() {
      this.validationErrors.title = !this.newBook.title;
      this.validationErrors.author = !this.newBook.author;
      this.validationErrors.publicationYear = !this.newBook.publicationYear;

      if (
        this.newBook.title &&
        this.newBook.author &&
        this.newBook.publicationYear
      ) {
        this.addBook(this.newBook)
          .then(() => {
            // Limpa o formulário depois de adicionar o livro
            this.newBook = {
              title: "",
              author: "",
              publicationYear: "",
              status: "unread",
            };
            this.validationErrors = {
              title: false,
              author: false,
              publicationYear: false,
            };
          })
          .catch((error) => {
            console.error("Vixii, tenta adicionar novamente", error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-book {
  
  .form-label {
    font-family: $font-primary;
    font-size: 20px;
    color:$primary-color;
    font-weight: 400;
  }
  input[type="radio"] {
    margin-top: 2.8rem;
    border: 1px solid #c0c5c8;
    font-size: 20px;
    background-color: #c0c5c8;
    &:checked {
      background-color:$primary-color;
      border-color:$primary-color;
      z-index: 99999;
    }
  }
  .form-check-label {
    font-size: 18px;
    color:$primary-color;
    font-weight: 400;
    margin-top: 2.7rem;
    font-family: $font-primary;
  }
  // botão de adicionar livro
  .btn-primary {
    width: 221px;
    height: 40px;
    padding: 8px 24px 8px 24px;
    background-color:$primary-color;
    color: white;
    border: none;
    border-radius: 12px;
    font-family: $font-primary;
    &:hover {
      background-color: #e6a4b8;
      color: black;
    }
  }
  .invalid {
    border: 1px solid red;
  }
  .invalid-feedback {
    color: red;
    font-size: 12px;
  }
  .invalid-feedback {
    color: red;
    font-size: 12px;
    display: none;
  }
  .invalid ~ .invalid-feedback {
    display: block;
  }

  @media screen and (max-width: 575px) {
    .form-check-label {
      font-size: 13px !important;
      margin-top: 2.9rem !important;
      font-weight: 500 !important;
      
    }
    .btn-radio{
      margin-top: 0.3rem;
      margin-bottom: 1.5rem;
      justify-content: space-between !important;
      
    }
    
  }

  @media screen and (max-width: 991px ){
    .form-check-label {
      font-size: 18px;
      margin-top: 2.7rem;
    }
    .btn-radio{
      margin-top: 0.1rem;
      margin-bottom: 1rem;
      justify-content: space-around;
    }
  }
  @media screen and (min-width: 992px ){
    .form-check-label {
      font-size: 15px !important;
      margin-top: 2.7rem;
    }
    .btn-radio{
      margin-top: 0.1rem;
      margin-bottom: 1rem;
      justify-content: space-around;
    }
  }
}
</style>
