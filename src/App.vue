<template>
  <div id="app">
    <nav>
      <RouterLink to="/product">Product</RouterLink> |
      <RouterLink to="/product/:id">Product Detail</RouterLink> |
      <RouterLink to="/cart">Cart</RouterLink> |
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { RouterLink } from "vue-router";
</script>

<style></style>
