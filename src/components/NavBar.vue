<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cart'
import CartIcon from '@/components/cart/CartIcon.vue'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <nav>
    <div class="logo">
      <router-link to="/">FootShop</router-link>
    </div>
    
    <div class="actions">
      <CartIcon 
        :item-count="cartStore.totalItems" 
        @click="cartStore.toggleCart" 
      />
      
      <button v-if="authStore.isAuthenticated" @click="logout" class="logout">
        Déconnexion
      </button>
      
      <router-link v-else to="/login" class="login">
        Connexion
      </router-link>
    </div>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
}

.logo a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.login, .logout {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}

.login {
  background: #3a86ff;
  color: white;
}

.logout {
  background: #ff3333;
  color: white;
  border: none;
}
</style>