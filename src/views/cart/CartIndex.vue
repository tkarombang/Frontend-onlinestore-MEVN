<template>
  <div>

    <!--  is-max-tablet -->
    <div class="container is-max-tablet">

      <div v-for="(item, index) in dataCart" :key="index" class="card column">

        <div class="columns is-multiline is-max-tablet">

          <div class="column is-one-fifth ml-1">
            <div class="card-image ">
              <figure class="image is-128x128">
                <img :src="item.imageUrl" :alt="item.name">
              </figure>
            </div>
          </div>

          <div class="column p-2">
            <div class="card-content p-2">
              <div class="content">
                <h6 class="title is-6">{{ item.name }}</h6>
                <p class="subtitle is-size-6">{{ item.price }}</p>
                <p class="subtitle is-size-6">{{ item.description }}</p>
              </div>

              <div class="card-footer">
                <div class="card-footer-item is-flex is-justify-content-end">
                  <i class="fa-regular fa-star is-0"></i>
                  <h5 class="ml-2">ratings</h5>
                </div>
              </div>

            </div>

          </div>

          <div class="column is-narrow plex">
            <div class="content-flex">
              <button class="button is-info is-small" style="width: 34px;">+</button>
              <input type="text" class="input is-small" style="width: 34px;">
              <button class="button is-danger is-small" style="width: 34px;">-</button>
            </div>
            <div>
              <button class="button">Remove</button>
            </div>

          </div>
        </div>




      </div>
      <div>
        <h1 class="title is-5">Total: {{ new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(totalPrice) }}</h1>
      </div>
    </div>
  </div>

</template>

<script setup>
import { computed, ref } from 'vue';
import { cartItems } from '@/data-seed';

// DATA UNTUK LATIHAN
const dataCart = ref(cartItems)
// dataCart.value.forEach(element => {
//   // console.log(element.price)
//   const potong = parseFloat(element.price.split('.').join(''))
//   const formatter = new Intl.NumberFormat('id-ID').format(potong,)
//   console.log(formatter)

// });

const totalPrice = computed(() => {
  return cartItems.reduce((total, item) =>
    total + parseInt(item.price.split('.').join('')), 0
    // new Intl.NumberFormat('id-ID').format(total + parseInt(item.price),), 0
  )
})
console.log(new Intl.NumberFormat('id-ID', {}).format(totalPrice.value),)

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
