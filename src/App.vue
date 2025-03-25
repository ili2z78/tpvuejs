<script setup>
import { watchEffect } from 'vue'
import { useAuthStore } from '@/stores/auth'
import NavBar from '@/components/NavBar.vue'
import CartSidebar from '@/components/cart/CartSidebar.vue'

const authStore = useAuthStore()

watchEffect(() => {
  if (authStore.token) {
    // Vérifier l'authentification
  }
})
</script>

<template>
  <NavBar />
  <RouterView />
  <CartSidebar />
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
</style>