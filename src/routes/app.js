import { createWebHistory, createRouter } from "vue-router";
import product from "../views/product/Index.vue";
import productDetail from "../views/product/Detail.vue";
import cart from "../views/cart/Index.vue";

const routes = [
  { path: "/product", name: "Product", component: product },
  { path: "/product/:id", name: "Detail", component: productDetail },
  { path: "/cart", name: "Cart", component: cart },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
