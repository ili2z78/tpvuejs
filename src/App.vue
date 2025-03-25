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
</style><style>
body {
  font-family: 'Roboto', Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  color: #333;
  line-height: 1.6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
}

a:hover {
  color: #42b983;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
}

ul {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: bold;
}

p {
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>