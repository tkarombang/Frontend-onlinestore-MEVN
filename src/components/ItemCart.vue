<template>

  <div class="card column">

    <div class="columns is-multiline is-max-tablet">

      <div class="column is-one-fifth ml-1">
        <div class="card-image ">
          <figure class="image is-128x128">
            <img :src="`http://localhost:8000${product.imageUrl}`" :alt="product.name">
          </figure>
        </div>
      </div>

      <div class="column p-2">
        <div class="card-content p-2">
          <div class="content">
            <h6 class="title is-6">{{ product.name }}</h6>
            <p class="subtitle is-size-6">{{ product.price }}</p>
            <p class="subtitle is-size-6">{{ product.description.substring(0, 30) + '...' }}</p>
          </div>

          <div class="card-footer">
            <div class="card-footer-item is-flex is-justify-content-end">
              <!-- <i class="fa-regular fa-star is-0"></i> -->
              <div v-for="index in 5" :key="index - 1">
                <div v-if="parseFloat(product.averageRating) > index - 1">
                  <i class="fa-solid fa-star column is-0"></i>
                </div>
                <div v-else-if="parseFloat(product.averageRating) <= index - 1">
                  <i class="fa-regular fa-star column is-0"></i>
                </div>
              </div>
              <h5 class="ml-2">ratings</h5>
            </div>
          </div>

        </div>

      </div>

      <div class="column is-narrow plex">
        <div class="content-flex">
          <button class="button is-info is-small" style="width: 34px;" @click="increaseQty">+</button>
          <input type="text" class="input is-small has-text-centered" style="width: 34px;" :value="product.quantity"
            readonly>
          <button class="button is-danger is-small" style="width: 34px;" @click="decreaseQty">-</button>
        </div>
        <div>
          <button class="button is-danger" :alt="product.name" @click="fetchRemoveFromCart">Remove</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import axios from 'axios';

// Define props
const props = defineProps({
  product: {
    type: Object,
    required: true, // Menjamin bahwa props wajib diberikan
  },

});


//Define emits
const emits = defineEmits(['remove-product', 'update-quantity'])
//Define Quantity
const increaseQty = () => {
  console.log(`Increase: ${props.product.name} -> ${props.product.quantity + 1}`);
  emits('update-quantity', props.product.code, props.product.quantity + 1)
}
const decreaseQty = () => {
  if (props.product.quantity > 1) {
    console.log(`Decrease: ${props.product.name} -> ${props.product.quantity - 1}`);
    emits('update-quantity', props.product.code, props.product.quantity - 1)
  }
}


const fetchRemoveFromCart = async () => {
  console.log('Product data in fetchRemoveFromCart:', props.product); // Debugging
  try {
    const response = await axios.delete(`http://localhost:8000/api/orders/user/1/product/${props.product.code}`);
    console.log('Product code:', props.product.code);
    console.log('Product Name:', props.product.name);
    if (response.status === 200) {
      console.log('Product berhasil dihapus:', response);
      emits('remove-product', props.product.code, props.product.name)
    }
  } catch (err) {
    console.error('Error menghapus data:', err);
  }
};


</script>
<style scoped>
.content-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px
}

.plex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* MOBILE DISPLAY */
@media only screen and (max-width: 768px) {
  .content-flex {
    flex-direction: row;
  }

  .plex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
