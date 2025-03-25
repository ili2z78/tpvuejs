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
</style><style>
.card {
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #42b983;
  margin: 0.5rem 0 1rem;
}

.btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background: #369f6e;
}
</style>