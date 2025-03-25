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
</script><style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1e1e2f;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.logo a:hover {
  color: #36a374;
}

.actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.login, .logout {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.2s;
}

.login {
  background: #3a86ff;
  color: white;
}

.login:hover {
  background: #2f6fd4;
  transform: translateY(-2px);
}

.logout {
  background: #ff4d4d;
  color: white;
  border: none;
}

.logout:hover {
  background: #e63939;
  transform: translateY(-2px);
}

.actions .cart-icon {
  position: relative;
  cursor: pointer;
}

.actions .cart-icon::after {
  content: attr(data-count);
  position: absolute;
  top: -5px;
  right: -10px;
  background: #ff3333;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

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