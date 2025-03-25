<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="sidebar" :class="{ open: cartStore.isOpen }">
    <div class="header">
      <h2>Votre Panier</h2>
      <button @click="cartStore.toggleCart" class="close-btn">×</button>
    </div>
    
    <div v-if="cartStore.items.length === 0" class="empty">
      Panier vide
    </div>
    
    <div v-else>
      <div class="items">
        <div v-for="item in cartStore.items" :key="item.id" class="item">
          <img :src="item.image" :alt="item.name">
          <div class="info">
            <h4>{{ item.name }}</h4>
            <p>{{ item.price }} € × {{ item.quantity }}</p>
            <div class="actions">
              <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)">+</button>
              <button @click="cartStore.removeItem(item.id)" class="remove">×</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="total">
        <p>Total: <strong>{{ cartStore.totalPrice }} €</strong></p>
        <button class="checkout">Commander</button>
      </div>
    </div>
  </div>
  
  <div v-if="cartStore.isOpen" class="overlay" @click="cartStore.toggleCart"></div>
</template>

<style>
.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  transition: right 0.3s;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.sidebar.open {
  right: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 99;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.empty {
  padding: 2rem;
  text-align: center;
}

.items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.item {
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
}

.item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.info {
  flex: 1;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.actions button {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  background: none;
  cursor: pointer;
}

.remove {
  color: red;
  border: none !important;
  margin-left: auto;
}

.total {
  padding: 1rem;
  border-top: 1px solid #eee;
}

.checkout {
  width: 100%;
  padding: 0.75rem;
  background: #3a86ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>