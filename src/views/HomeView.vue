<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const goToProducts = () => {
  if (authStore.isAuthenticated) {
    router.push('/products')
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <div class="home">
    <h1>Boutique Foot</h1>
    <p>Tous les articles officiels de vos clubs préférés</p>
    <button @click="goToProducts" class="btn">
      Voir les articles
    </button>
  </div>
</template>

<style>
.home {
  text-align: center;
  padding: 2rem;
}

.btn {
  padding: 10px 20px;
  background: #3a86ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background: #2667cc;
}
</style>