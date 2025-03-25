<script setup lang="ts">
defineProps<{
  itemCount: number
}>()

defineEmits(['click'])
</script>

<template>
  <button class="cart-icon" @click="$emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span v-if="itemCount > 0" class="cart-badge">{{ itemCount }}</span>
  </button>
</template>

<style scoped>
.cart-icon {
  position: relative;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}
</style><style scoped>
.cart-icon {
  position: relative;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, color 0.3s;
}

.cart-icon:hover {
  transform: scale(1.1);
  color: #42b983;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;
}

.cart-badge:hover {
  background-color: #c0392b;
  transform: scale(1.1);
}
</style>