import Vue from "vue";
import VueRouter from "vue-router";
import AddBook from "@/views/AddBook.vue";
import BookTable from "@/views/BookTable.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: '/add-book'
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/book-table',
    name: 'BookTable',
    component: BookTable
  },
];
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;

