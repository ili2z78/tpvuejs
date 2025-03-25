import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

interface User {
  id: string
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<User | null> = ref(null)
  const token: Ref<string | null> = ref(localStorage.getItem('token'))
  
  const isAuthenticated = computed(() => !!token.value)
  
  function login(email: string, password: string) {
    
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        user.value = {
          id: '1',
          name: 'Test User',
          email: email
        }
        token.value = 'fake-jwt-token'
        localStorage.setItem('token', token.value)
        resolve()
      }, 500)
    })
  }
  
  function register(name: string, email: string, password: string) {
   
    return login(email, password)
  }
  
  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }
  
  return { user, token, isAuthenticated, login, register, logout }
})