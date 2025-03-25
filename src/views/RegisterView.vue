<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const isLoading = ref(false)

const router = useRouter()
const authStore = useAuthStore()

async function handleRegister() {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Veuillez remplir tous les champs'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Les mots de passe ne correspondent pas'
    return
  }

  try {
    isLoading.value = true
    await authStore.register(name.value, email.value, password.value)
    router.push('/products')
  } catch (err) {
    error.value = 'Une erreur est survenue lors de l\'inscription'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth-container">
    <div class="auth-card">
      <h2>Inscription</h2>
      
      <form @submit.prevent="handleRegister" class="auth-form">
        <div class="form-group">
          <label for="name">Nom complet</label>
          <input 
            v-model="name" 
            type="text" 
            id="name" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            v-model="email" 
            type="email" 
            id="email" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input 
            v-model="password" 
            type="password" 
            id="password" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input 
            v-model="confirmPassword" 
            type="password" 
            id="confirmPassword" 
            required
          >
        </div>
        
        <p v-if="error" class="error-message">{{ error }}</p>
        
        <button type="submit" :disabled="isLoading" class="auth-button">
          {{ isLoading ? 'Inscription en cours...' : 'S\'inscrire' }}
        </button>
      </form>
      
      <p class="auth-switch">
        Déjà un compte ? 
        <router-link to="/login">Se connecter</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 2rem;
}

.auth-card {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.auth-form {
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.error-message {
  color: #e74c3c;
  margin: 0.5rem 0;
}

.auth-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.auth-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.auth-switch {
  text-align: center;
  margin-top: 1.5rem;
}

.auth-switch a {
  color: #42b983;
  text-decoration: none;
}
</style><style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 2rem;
  background: linear-gradient(135deg, #42b983, #3a86ff);
}

.auth-card {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.auth-card h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.auth-form {
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #42b983;
  outline: none;
}

.error-message {
  color: #e74c3c;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: bold;
}

.auth-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.auth-button:hover {
  background-color: #369f6e;
  transform: translateY(-2px);
}

.auth-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.auth-switch {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
}

.auth-switch a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.auth-switch a:hover {
  color: #369f6e;
}
</style>