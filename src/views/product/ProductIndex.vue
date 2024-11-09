<template>
  <div>
    <h1>Index Product</h1>

    <div class="container">
      <!-- is-col-min-14 -->

      <div class="grid is-col-min-14 is-row-gap-0 is-column-gap-3">
        <div class="card" v-for="(brg, index) in barangs" :key="index">
          <div class="card-image">
            <figure class="image">
              <img :src="brg.imageUrl" :alt="brg.name" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <h1 class="title is-size-5">{{ brg.name }}</h1>
              <p class="subtitle is-size-6 mt-3">Rp{{ brg.price }} | {{ brg.size }}</p>
            </div>
          </div>
          <footer class="card-footer">

            <div class="card-footer-item">
              <RouterLink :to="{ name: 'Detail', params: { id: brg.id } }" class="navbar-item"><button
                  class="button is-primary">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-info-circle"></i>
                    </span>
                    <span></span>
                  </span>
                  Details</button></RouterLink>
            </div>


          </footer>
        </div>
      </div>


    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import { products } from '../../data-seed'

const barangs = ref(products);
</script>

<style scoped></style>
