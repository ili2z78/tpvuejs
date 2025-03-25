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
</style><style>
.products {
  padding: 2rem;
  background: linear-gradient(135deg, #42b983, #3a86ff);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 2rem auto;
  max-width: 1200px;
  text-align: center;
}

.products h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.grid > * {
  transition: transform 0.3s, box-shadow 0.3s;
}

.grid > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.products div[v-if="isLoading"] {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-top: 2rem;
}
</style>