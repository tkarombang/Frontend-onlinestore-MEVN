<template>
  <!-- <div v-for="(brg, index) in barangs " :key="index"> -->
  <div v-if="barangs">
    <!--  is-max-tablet -->
    <div class="container is-max-tablet">

      <div class="card columns">
        <div class="column">
          <div class="columns is-max-tablet">
            <div class="column">
              <div class="card-image">
                <figure class="image ">
                  <img :src="`http://localhost:8000${barangs.imageUrl}`" :alt="barangs.name" />
                </figure>
              </div>
            </div>
            <div class="column">

              <div class="card-content">
                <div class="content">
                  <h1 class="title is-size-5">{{ barangs.name }}</h1>
                  <p class="subtitle is-size-6 mt-3">Rp{{ barangs.price }} | {{ barangs.size }}</p>
                  <p class="subtitle is-size-6 mt-3">{{ barangs.description }}</p>

                  <div class="is-flex">
                    <div v-for="index in 5" :key="index - 1">
                      <div v-if="parseFloat(barangs.averageRating) > index - 1">
                        <i class="fa-solid fa-star column is-0"></i>
                      </div>
                      <div v-else-if="parseFloat(barangs.averageRating) <= index - 1">
                        <i class="fa-regular fa-star column is-0"></i>
                      </div>
                    </div>
                    <h5 class="column">{{ barangs.averageRating }}</h5>
                  </div>


                </div>
              </div>

            </div>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <div class="btn-buy">
                <button class="button is-primary">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                    </span>
                    <span></span>
                  </span>
                  Buy</button>
              </div>
              <div class="btn-message">
                <button class="button is-primary">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fa-solid fa-message"></i>
                    </span>
                    <span></span>
                  </span>
                  Message</button>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
// import axios from 'axios';
import { defineProps } from 'vue';

defineProps({
  barangs: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.btn-buy {
  margin-right: 1rem;
}

.btn-message {
  margin-left: 1rem;
}
</style>
