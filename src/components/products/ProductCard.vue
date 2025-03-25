<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])
</script>

<template>
  <div class="card">
    <img :src="product.image" :alt="product.name">
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }} €</p>
    <button @click="$emit('add-to-cart')" class="btn">
      Ajouter au panier
    </button>
  </div>
</template>

<style>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.price {
  font-weight: bold;
  color: #3a86ff;
  margin: 0.5rem 0;
}

.btn {
  background: #3a86ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>