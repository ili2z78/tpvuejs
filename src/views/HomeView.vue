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
</style><style>
.home {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #42b983, #3a86ff);
  color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 2rem auto;
  max-width: 600px;
}

.home h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.home p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.btn {
  padding: 12px 24px;
  background: #3a86ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  background: #2667cc;
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}
</style>