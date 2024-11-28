<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="products.imageUrl" :alt="products.name" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h2 class="title is-size-6">{{ products.name.substring(0, 20) + '...' }}</h2>
        <p class="subtitle is-size-6 mt-2">Rp{{ products.price }} | {{ products.size }}</p>
      </div>
    </div>

    <footer class="card-footer">

      <div class="card-footer-item ">
        <RouterLink :to="{ name: 'Detail', params: { id: products.id } }">
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

<style></style>
