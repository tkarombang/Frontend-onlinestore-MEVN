import { createWebHistory, createRouter } from "vue-router";
import product from "../views/product/ProductIndex.vue";
import productDetail from "../views/product/ProductDetail.vue";
import cart from "../views/cart/CartIndex.vue";
import NotFound from "@/views/errPage/NotFound.vue";

const routes = [
  { path: "/product", name: "Product", component: product },
  { path: "/product/:id", name: "Detail", component: productDetail },
  { path: "/cart", name: "Cart", component: cart },
  { path: "/:pathMatch(.*)*", name: 'NotFound', component: NotFound },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
