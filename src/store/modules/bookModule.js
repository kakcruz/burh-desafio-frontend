import apiClient from "@/services/apiClient";

const state = {
  books: [],
};

const mutations = {
  setBooks: (state, books) => (state.books = books),
  newBook: (state, book) => state.books.push(book),
  removeBook: (state, id) =>
    (state.books = state.books.filter((book) => book._id !== id)),
  updateBook: (state, updatedBook) => {
    const index = state.books.findIndex((book) => book._id === updatedBook._id);
    if (index !== -1) {
      state.books.splice(index, 1, updatedBook);
    }
  },
};

const getters = {
  allBooks: (state) => state.books,
  booksConfirm: (state) => state.books.filter((book) => book.status === "read"),
  nextBooks: (state) => state.books.filter((book) => book.status === "unread"),
};

const actions = {
  async fetchBooks({ commit }) {
    try {
      const response = await apiClient.get("/books");
      commit("setBooks", response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  },

  async addBook({ commit }, book) {
    try {
      const response = await apiClient.post("/books", book);
      commit("newBook", response.data);
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  },

  async deleteBook({ commit }, id) {
    try {
      await apiClient.delete(`/books/${id}`);
      commit("removeBook", id);
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  },

  async updateBook({ commit }, updatedBook) {
    try {
      await apiClient.put(`/books/${updatedBook._id}`, updatedBook);
      commit("updateBook", updatedBook);
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
