<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

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
