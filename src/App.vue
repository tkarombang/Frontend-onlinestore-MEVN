<template>
  <div id="app">

    <nav class="navbar is-fixed-top is-primary has-shadow title is-size-4" role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-brand">
          <h1 class="navbar-item ">ONLINESHOP</h1>

          <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <div class="navbar-menu" id="navMenu">
        <!-- navbar start, navbar end -->
        <div class="navbar-start">
          <!-- navbar items -->
          <RouterLink to="/product" class="navbar-item">Product</RouterLink>
          <RouterLink :to="{ name: 'Detail', params: { id: 123 } }" class="navbar-item">Product Detail</RouterLink>
          <RouterLink to="/cart" class="navbar-item">Cart</RouterLink>
        </div>

        <div class="navbar-end">
          <!-- navbar items -->
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="button">
                  <span class="icon">
                    <i class="fas fa-twitter" aria-hidden="true"></i>
                  </span>
                  <span>Tweet</span>
                </a>
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





    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { RouterLink } from "vue-router";

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";

main {
  margin-top: 3rem;
  padding: 1.5rem;
}

/* *{
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
#page-wrap{
  margin: auto;
  max-width: 800px;
  min-height: 100vh;
  background-color: salmon;
} */
</style>
