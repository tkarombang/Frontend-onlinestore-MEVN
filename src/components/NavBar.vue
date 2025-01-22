<template>

  <nav class="navbar is-primary has-shadow title is-size-4" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <h1 class="navbar-item ">ONLINESHOP</h1>

      <a role="button" class="navbar-burger has-background-primary-10 has-text-primary-10-invert" data-target="navMenu"
        aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu">
      <!-- navbar start, navbar end -->
      <div class="navbar-start">
        <!-- navbar items -->
        <RouterLink to="/products" class="navbar-item">Products</RouterLink>
        <!-- <RouterLink :to="{ name: 'Detail', params: { id: 123 } }" class="navbar-item">Product Detail</RouterLink> -->

      </div>

      <div class="navbar-end">
        <!-- navbar items -->
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <RouterLink to="/orders" class="navbar-item button">
                <span class="icon">
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
                Cart
              </RouterLink>
            </p>
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fas fa-download" aria-hidden="true"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style></style>
