<template>
  <div class="card is-mobile product-card">
    <div class="card-image">
      <figure class="image">
        <img v-lazy="`http://localhost:8000${products.imageUrl}`" :alt="products.name" class="lazy-mage" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h2 class="title is-size-6">{{ products.name }}</h2>
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
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
}

.product-card .card-content {
  flex-grow: 1;
  /* Memastikan bagian konten mengisi ruang yang tersedia */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.lazy-image {
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.lazy-image[data-loaded="true"] {
  opacity: 1;
}
</style>
