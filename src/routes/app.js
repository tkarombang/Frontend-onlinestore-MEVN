import { createWebHistory, createRouter } from "vue-router";
import product from "../views/product/ProductIndex.vue";
import productDetail from "../views/product/ProductDetail.vue";
import cart from "../views/cart/CartIndex.vue";
import NotFound from "@/views/errPage/NotFound.vue";

const routes = [
  { path: "/products", name: "Product", component: product },
  { path: "/products/:code", name: "Detail", component: productDetail },
  { path: "/orders", name: "Cart", component: cart },
  { path: "/:pathMatch(.*)*", name: 'NotFound', component: NotFound },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
