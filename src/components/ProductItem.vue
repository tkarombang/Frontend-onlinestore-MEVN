<template>
  <div class="card is-mobile product-card">
    <div class="card-image">
      <figure class="image">
        <img :src="`http://localhost:8000${products.imageUrl}`" :alt="products.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h2 class="title is-size-6">{{ products.name.substring(0, 20) + '...' }}</h2>
        <p class="subtitle is-size-6 mt-2">Rp{{ products.price }} | Code: {{ products.code }}</p>
        <p class="subtitle is-size-6">{{ products.description.substring(0, 50) + '...' }}</p>
      </div>
    </div>

    <footer class="card-footer">

      <div class="card-footer-item ">
        <RouterLink :to="{ name: 'Detail', params: { code: products.code } }">
          <button class="button is-primary">
            <span class="icon-text">
              <i class="fas fa-info-circle mr-2"></i>
            </span>
            Details
          </button>
        </RouterLink>
      </div>

    </footer>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  products: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  /* Susunan vertikal */
  justify-content: space-between;
  /* Ruang antara elemen */
  height: 100%;
  /* Memastikan semua elemen memiliki tinggi yang sama */
  box-sizing: border-box;
  /* Menyertakan padding dan border dalam ukuran total */
}

.product-card .card-content {
  flex-grow: 1;
  /* Memastikan bagian konten mengisi ruang yang tersedia */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
