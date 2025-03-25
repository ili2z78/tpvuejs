<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import ProductCard from '@/components/products/ProductCard.vue'

const cartStore = useCartStore()
const isLoading = ref(false)
</script>

<template>
  <div class="products">
    <h1>Nos Articles de Foot</h1>
    
    <div v-if="isLoading">Chargement...</div>
    
    <div class="grid">
      <ProductCard
        v-for="product in cartStore.footballProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="cartStore.addItem(product)"
      />
    </div>
  </div>
</template>

<style>
.products {
  padding: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>